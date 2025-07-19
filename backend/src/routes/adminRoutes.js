import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  addImg,
  addProducts,
  getAllUser,
} from "../controllers/adminController.js";
import { updateUserRole } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.put("/update-role", protectRoute, updateUserRole);
router.get("/get-users", protectRoute, getAllUser);
router.post("/img-upload", protectRoute, upload.single("file"), addImg);
router.post("/add-product", protectRoute, addProducts);

export default router;
