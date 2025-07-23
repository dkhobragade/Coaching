import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { addPaymentReceipt } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/payment-receipt", protectRoute, addPaymentReceipt);

export default router;
