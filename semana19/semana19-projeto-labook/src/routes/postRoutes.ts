import express from "express";
import PostController from "../controller/PostController";
import RelationsController from "../controller/RelationsController";

export const postRouter = express.Router();

postRouter.post("/post", PostController.createPost);
postRouter.get("/feed", PostController.getFeed);
postRouter.post("/like", RelationsController.likePost);
postRouter.post("/unlike", RelationsController.unlikePost);
postRouter.post("/comment", RelationsController.postComment);
postRouter.get("/:id", PostController.getPostById)