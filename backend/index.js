import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./lib/db.js";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
console.log(process.env.MONGODB_URL);

app.use(cors({
  origin:" http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

connectDb(process.env.MONGODB_URL);

import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.listen(port, () => {
  console.log(`Server listes PORT: ${port}`);
});
