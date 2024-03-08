export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    let result = undefined;

    if (req.file && req.file.path) {
      // Upload image to Cloudinary with compression
      result = await cloudinary.uploader.upload(req.file.path, {
        quality: "auto:low", // Set compression quality to low
      }).catch(err => {
        console.error('Error uploading file to Cloudinary:', err);
        res.status(500).json({ message: 'Error uploading file to Cloudinary' });
        return;
      });
    }

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
    console.log("Error end of block : " + err.message);
    res.status(409).json({ message: err.message });
  }
};
