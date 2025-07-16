import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  addUserCartItems,
  viewCartItems,
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/cart-Items", protectRoute, addUserCartItems);
router.get("/view-cart", protectRoute, viewCartItems);

export default router;
