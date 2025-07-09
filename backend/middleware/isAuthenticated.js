import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.chatAppToken || req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "User is not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "User is not authenticated" });
    }
    const user = await User.findById(decoded.userId);

    req.userId = user._id;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;
