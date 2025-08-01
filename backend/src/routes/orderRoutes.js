import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { orderDetails } from "../controllers/orderController.js";

const router = express.Router();

router.post("/order_details", protectRoute, orderDetails);

export default router;
