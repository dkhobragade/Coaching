import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  addPDFImg,
  addProductImg,
  addProducts,
  getAllUser,
} from "../controllers/adminController.js";
import { updateUserRole } from "../controllers/adminController.js";

const router = express.Router();

router.put("/update-role", protectRoute, updateUserRole);
router.get("/get-users", protectRoute, getAllUser);
router.post("/img-upload", protectRoute, addProductImg);
router.post("/add-product", protectRoute, addProducts);
router.post("pdf-upload", protectRoute, addPDFImg);

export default router;
