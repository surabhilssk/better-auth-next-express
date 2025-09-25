import { Router } from "express";
import { auth } from "../lib/auth";
import { fromNodeHeaders } from "better-auth/node";


export const userRouter = Router();

userRouter.use(async (req, res, next) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });
    if(!session?.user){
        return res.status(401).json({
            error: "Unauthorized user"
        });
    }
    next();
})

userRouter.get("/",async(req, res) => {
    return res.json({
        message: "Middleware worked"
    });
});
