import express from "express";
import {
  check,
  logout,
  signin,
  signUp,
} from "../controllers/authController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signUp);
router.post("/logout", logout);

router.get("/check", protectRoute, check);

export default router;
