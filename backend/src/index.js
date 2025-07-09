import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieparser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieparser());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
