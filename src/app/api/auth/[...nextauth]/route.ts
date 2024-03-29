import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@prisma/client"; // Import the User model from Prisma

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                const authResponse = await fetch("http://localhost:3000/api/user", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    })
                });

                const user: User | null = await authResponse.json(); // Assuming User is the Prisma User model

                if (user) {
                    return { ...user, id: user.id, username: user.username }; // Include the id and username properties from Prisma User model
                } else {
                    return null;
                }
            },
        }),
    ],
});

export { handler as GET, handler as POST };
