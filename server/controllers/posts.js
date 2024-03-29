import Post from "../models/Post.js";
import User from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    let result = undefined ;
    //console.log(req.file.path);
    if (req.file && req.file.path) {
      result = await cloudinary.uploader.upload(req.file.path,{
        quality: "auto:low", // Set compression quality to low
      }).catch(err => {
        console.error('Error uploading file to Cloudinary:', err);
        res.status(500).json({ message: 'Error uploading file to Cloudinary' });
        return;
      });


    }
    //console.log(result.secure_url);

    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath: result ? result.secure_url : picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    if (req.file && req.file.path) {
      fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      });
    }
    res.status(201).json(post);
  } catch (err) {
    console.log("Error end of block : "+ err.message);
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addComment = async (req, res) => {
  try {
    const { id } = req.params; // Assuming id is the post ID
    const { userId, comment } = req.body; // Assuming userId and comment are sent in the request body

    // Find the post by ID
    const post = await Post.findById(id);

    // Add the comment to the post's comments array
    post.comments.push(
      comment
     // You can also include a timestamp for when the comment was created
    );

    // Save the updated post
    const updatedPost = await post.save();

    res.status(200).json(updatedPost);
  } catch (err) {

    res.status(404).json({ message: err.message });
  }
};

/* DELETE */
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params; // Assuming id is the post ID

    // Find the post by ID
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the logged-in user is the owner of the post
    // if (post.userId !== req.user.userId) {
    //   return res.status(403).json({ message: "You are not authorized to delete this post" });
    // }

    // Delete the post
    await Post.findByIdAndDelete(id);

    // Fetch the updated list of posts
    const updatedPosts = await Post.find();

    res.status(200).json(updatedPosts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


// Update social profiles
export const updateSocialProfiles = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Destructure twitter and linkedin directly from req.body.socialProfiles
    const { twitter, linkedin } = req.body.socialProfiles;

    // Check if both Twitter and LinkedIn profiles are empty
    if (!twitter && !linkedin) {
      // No updates provided, respond with the current user object
      return res.status(200).json(user);
    }

    // Update the Twitter and LinkedIn profiles if provided
    if (twitter !== undefined) {
      user.socialProfiles.twitter = twitter;
    }
    if (linkedin !== undefined) {
      user.socialProfiles.linkedin = linkedin;
    }
    
    // Save the updated user
    await user.save();

    // Respond with the updated user object
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating social profiles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



