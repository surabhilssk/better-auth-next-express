import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "@prisma/client";
import { openAPI } from "better-auth/plugins";

const prisma = new PrismaClient();
const trustedOrigin = process.env.FRONTEND_URL || window.location.origin;

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword:{
        enabled: true,
        autoSignIn: true,
    },
    socialProviders: {
        github: {
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
        }
    },
    trustedOrigins: [trustedOrigin],
    advanced: {
        defaultCookieAttributes: {
            sameSite: 'none',
            secure: true,
            httpOnly: true,
            domain: ".vercel.app"
        }
    },
    plugins: [
        openAPI(),
    ]
});