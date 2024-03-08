export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Upload image to Cloudinary with compression
    const result = await cloudinary.uploader.upload(req.file.path, {
      quality: "auto:low", // Set compression quality to low
    });

    // Delete temporary file after uploading
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath: result.secure_url,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
