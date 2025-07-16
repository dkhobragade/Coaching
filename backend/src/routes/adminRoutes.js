import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import { addProducts, getAllUser } from "../controllers/adminController.js";
import { updateUserRole } from "../controllers/adminController.js";

const router = express.Router();

router.put("/update-role", protectRoute, updateUserRole);
router.get("/get-Users", protectRoute, getAllUser);
router.post("/add-product", protectRoute, addProducts);

export default router;
