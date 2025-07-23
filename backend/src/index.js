import express from "express";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cookieparser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieparser());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/auth", productRoutes);
app.use("/api/auth", adminRoutes);
app.use("/api/auth", cartRoutes);
app.use("/api/auth", paymentRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
