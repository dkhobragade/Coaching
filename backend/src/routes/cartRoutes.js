import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  addToCart,
  deleteAllCartItems,
  fillAddressDetails,
  viewCartItems,
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/cart", protectRoute, addToCart);
router.get("/view-cart", protectRoute, viewCartItems);
router.get("/empty-cart", protectRoute, deleteAllCartItems);
router.post("/add-address", protectRoute, fillAddressDetails);

export default router;
