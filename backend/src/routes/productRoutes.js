import express from "express";
import { productDetails } from "../controllers/productController";
import { protectRoute } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/getItems", protectRoute, productDetails);
