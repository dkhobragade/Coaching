import express from "express";
import { getAllProducts } from "../controllers/productController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/products", protectRoute, getAllProducts);

export default router;
