import { connectDB } from "@/lib/MongoConfig";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import { validateUser } from "@/app/lib/auth";

export const authOptions = {

    providers: [
        credentials({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();
                const AdminLogin = await validateUser({ email: credentials?.email })

                if (AdminLogin) {
                    const passwordMatch = await bcrypt.compare(
                        credentials.password,
                        AdminLogin.password
                    )

                    if (!passwordMatch) {
                        throw new Error("Wrong Password");
                    }


                    return {
                        id: AdminLogin.id,
                        email: AdminLogin.email,
                    }

                }
                throw new Error("Wrong Email");

            },
        })
    ],

    session: {
        strategy: "jwt",  // Json Web Token
        maxTimePeriod: 30 * 24 * 60 * 60, // 30 days session lifetime  -> Format(Days * Hours * Minutes * Seconds)
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token; // Attach token data to the session
            return session;
        },
    },
    pages: {
        signIn: "/Login", // Optional: custom sign-in page
        error: "/Login", // Optional: custom error page
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);