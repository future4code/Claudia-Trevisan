import express from "express";
import UserController from "../controller/UserController";

export const userRouter = express.Router();


userRouter.post("/signup", UserController.signup);
userRouter.post("/login", UserController.login);
userRouter.post("/friendship", UserController.friendship);
userRouter.post("/unfriendship", UserController.unfriendship)