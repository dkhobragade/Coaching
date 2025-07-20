import express from "express";
import {
  deleteProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/products", protectRoute, getAllProducts);
router.post("/del-product", protectRoute, deleteProduct);

export default router;
