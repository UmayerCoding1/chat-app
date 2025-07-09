import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const userRegister = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmPassword, gender } =
      req.body;

    if (
      !fullname ||
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }

    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashPassdord = await bcrypt.hash(password, 10);

    const mailProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femailProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    await User.create({
      fullname,
      username,
      email,
      password: hashPassdord,
      gender,
      avatar: gender === "male" ? mailProfile : femailProfile,
    });

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("User create error", error);

    throw new Error("Something went wrong");
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("chatAppToken", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .cookie("chatAppToken", token)
      .json({ message: "User logged in successfully", user });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("chatAppToken");
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    logger.error(error);
  }
};

export const otherUser = async (req, res) => {
  try {
    const userId = req.userId;
    const users = await User.find({ _id: { $ne: userId } }).select("-password");

    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};
