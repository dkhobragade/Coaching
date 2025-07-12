import express from "express";
import { getAllUser } from "../controllers/userController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getallUsers", protectRoute, getAllUser);

export default router;
