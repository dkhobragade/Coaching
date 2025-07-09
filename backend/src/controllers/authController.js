import User from "../models/User.js";
import bcryptjs from "bcryptjs";

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
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      });

      return;
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in SignUp controller", error.message);
    res.status(50).json({ message: "Internal Server Error" });
  }
};

export const signin = (req, res) => {
  res.send("signin");
};

export const logout = (req, res) => {
  res.send("logout");
};
