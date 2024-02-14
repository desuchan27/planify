"use client";

import { signIn } from 'next-auth/react';
import { z } from "zod";
import { FC } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface LoginFormProps {

}

const formSchema = z.object({
    email: z.string().min(6, {
        message: "Invalid email address",
    }).max(25),
    password: z.string().min(6, {
        message: "Invalid password",
    }),
});

const LoginForm: FC<LoginFormProps> = ({ }) => {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const data = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            console.log(data)

            if (data && data.error) {
                console.error('Error during signIn:');
                toast.error('something is wrong while signing in');
            } else {
                toast.success('Logged in successfully!');
                console.log(data)
                router.push('/dashboard');
            }
        } catch (error) {
            console.error('Error during signIn:', error);
            toast.error("Server error");
        }

    }


    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="your-email@yahoo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="******" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full">
                        Sign-In
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
