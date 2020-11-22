import express from "express";
import RelationsController from "../controller/RelationsController";
import UserController from "../controller/UserController";

export const userRouter = express.Router();


userRouter.post("/signup", UserController.signup);
userRouter.post("/login", UserController.login);
userRouter.post("/friendship", RelationsController.friendship);
userRouter.post("/unfriendship", RelationsController.unfriendship)