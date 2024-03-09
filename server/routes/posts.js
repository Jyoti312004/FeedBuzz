import express from "express";
import { getFeedPosts, getUserPosts, likePost,addComment, deletePost } from "../controllers/posts.js";
import { verify } from "../midlleware/auth.js";

const router = express.Router();

router.get("/",verify, getFeedPosts);
router.get("/:userId/posts", verify, getUserPosts);
router.patch("/:id/like", verify, likePost);
router.post("/:id/comment",verify,addComment);
router.delete("/:id", deletePost);

export default router;