import express from "express";
import { toNodeHandler } from "better-auth/node"
import { auth } from "./lib/auth";
import { userRouter } from "./routes/user";
import cors from "cors"

export const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL, // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}))

app.all("/api/auth/{*any}", toNodeHandler(auth));

// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth
app.use(express.json());

app.use("/user/blogs", userRouter);