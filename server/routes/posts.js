import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verify } from "../midlleware/auth.js";

const router = express.Router();

router.get("/", verify, getFeedPosts);
router.get("/:userId/posts", verify, getUserPosts);
router.patch("/:id/like", verify, likePost);

export default router;