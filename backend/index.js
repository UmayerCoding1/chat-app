import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./lib/db.js";
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
console.log(process.env.MONGODB_URL);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDb(process.env.MONGODB_URL);

import authRoute from "./routes/auth.route.js";

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server listes PORT: ${port}`);
});
