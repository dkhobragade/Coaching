import User from "../models/User.js";
import Product from "../models/Product.js";
import bucket from "../config/firebase.js";

export const updateUserRole = async (req, res) => {
  const { userID, newRole } = req.body;
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = newRole;
    await user.save();

    res.status(200).json({ message: "User role updated successfully", user });
  } catch (error) {
    console.log("Error while updating the userRole", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const getUser = await User.find();

    if (!getUser || getUser.length == 0) {
      return res.status(404).json({ message: "No user available" });
    }

    return res.status(200).json(getUser);
  } catch (error) {
    console.log("Error while getting all user", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addProducts = async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;
  try {
    const user = await User.findById(req.user._id);

    if (!user || user.role != "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
    });
    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.log("Error while adding the Product Details", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addImg = (req, res) => {
  const { imgFile } = req.body;

  try {
    const file = imgFile;
    const filename = `images/${Date.now()}-${file.originalname}`;

    const blob = bucket.file(filename);

    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.end(file.buffer);

    blobStream.on("finish", async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      res.status(200).json({ url: publicUrl });
    });

    blobStream.on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
  } catch (error) {
    console.log("Error while uploading the image", error);
    res.status(500).json({ error: error.message });
  }
};
