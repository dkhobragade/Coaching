import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { addUserCartItems } from "../controllers/cartController.js";

const router = express.Router();

router.post("/cart-Items", protectRoute, addUserCartItems);

export default router;
