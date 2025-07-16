import express from "express";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieparser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieparser());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/auth", productRoutes);
app.use("/api/auth", adminRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
