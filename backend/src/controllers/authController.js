import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/utils.js";
import bcrypt from "bcryptjs";
import cloudinary from "cloudinary";

export const signUp = async (req, res) => {
  const { fullName, email, mobile, password } = req.body;

  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 character" });
    }

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exits" });

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      mobile,
      password: hashedPassword,
      role: "user",
    });

    if (newUser) {
      generateToken({ userId: newUser._id, res });
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        message: "User added Succesfully",
        role: newUser.role,
      });

      return;
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in SignUp controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong Password" });
    }

    generateToken({ userId: user._id, res });

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      message: "LogIn successfully",
    });
  } catch (error) {
    console.log("Error in Signin controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 0,
      path: "/",
    });
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const check = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  const { profilePic } = req.body;
  try {
    const userId = req.user._id;

    if (!profilePic) {
      res.status(400).json({ message: "Profile Pic required" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic, {
      folder: "Profile_Pic",
    });
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilePic: uploadResponse.secure_url,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Profile Pic added Successfully", updatedUser });
  } catch (error) {
    console.log("Error while updating Profile Pic", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
