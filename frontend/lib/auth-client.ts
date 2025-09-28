import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string, // The base URL of your auth server
    fetchOptions: {
        credentials: "include"
    }
})