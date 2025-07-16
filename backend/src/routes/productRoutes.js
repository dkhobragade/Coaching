import express from "express";
import { getProductDetails } from "../controllers/productController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getItems", protectRoute, getProductDetails);

export default router;
