import express from "express";
import { logout, signin, signUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signUp);
router.post("/logout", logout);

export default router;
