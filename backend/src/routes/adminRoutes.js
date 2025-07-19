import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  addImg,
  addProducts,
  getAllUser,
} from "../controllers/adminController.js";
import { updateUserRole } from "../controllers/adminController.js";

const router = express.Router();

router.put("/update-role", protectRoute, updateUserRole);
router.get("/get-Users", protectRoute, getAllUser);
router.get("/img-upload", protectRoute, addImg);
router.post("/add-product", protectRoute, addProducts);

export default router;
