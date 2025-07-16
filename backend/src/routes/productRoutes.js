import express from "express";
import { getProductDetails } from "../controllers/productController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/get-Items", protectRoute, getProductDetails);

export default router;
