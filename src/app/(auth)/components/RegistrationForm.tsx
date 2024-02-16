"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { NextResponse } from "next/server";



interface RegistrationFormProps { }



const formSchema = z
    .object({
        name: z.string().min(1, {
            message: "Name is required",
        }),
        email: z.string().email({
            message: "Invalid email address",
        }),
        username: z
            .string()
            .min(6, {
                message: "Username must be at least 6 characters long",
            })
            .max(25),
        password: z
            .string()
            .min(6, {
                message: "Password must be at least 6 characters long",
            })
            .refine((password) => /^(?=.*[A-Z])(?=.*[0-9])/.test(password), {
                message:
                    "Password must contain at least one uppercase letter and one number",
            }),
        confirmPassword: z.string().min(6),
        birthdate: z
            .string()
            .refine((date) => new Date(date).toString() !== "Invalid Date", {
                message: "Invalid birthday",
            }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // path of error
    });

const RegistrationForm: FC<RegistrationFormProps> = ({ }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            birthdate: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)
            const data = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    birthdate: values.birthdate,
                }),
            });

            if (data.ok) {
                toast.success("Registration successful");
                router.push("/login");
            } else {
                const errorResponse = await data.json();
                if (errorResponse.message === "Email already exists") {
                    toast.error("Email already exists");
                } else {
                    toast.error("Something went wrong. Please try again later.");
                }
            }
        } catch (error) {
            console.log("error", error);
            toast.error("Something went wrong. Please try again later.");
        }
    };


    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Input your first name"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Input your valid email"

                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input

                                        placeholder="Minimum of 6 characters"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="birthdate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Birthdate</FormLabel>
                                <FormControl>
                                    <Input

                                        type="date"
                                        placeholder="Start Date"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    />
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
                                    <Input

                                        type="password"
                                        placeholder="Password must have one uppercase letter and one number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input

                                        type="password"
                                        placeholder="Confirm your password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Sign-Up
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default RegistrationForm;
