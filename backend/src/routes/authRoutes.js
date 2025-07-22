import express from "express";
import {
  check,
  logout,
  signin,
  signUp,
  updateProfile,
} from "../controllers/authController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signUp);
router.post("/logout", logout);
router.post("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, check);

export default router;
