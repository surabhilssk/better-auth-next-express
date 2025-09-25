import { Router } from "express";
import { auth } from "../lib/auth";
import { fromNodeHeaders } from "better-auth/node";


export const userRouter = Router();

userRouter.get("/",async(req, res) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    const user = session?.user.name
    return res.status(200).json({
        user
    })
})