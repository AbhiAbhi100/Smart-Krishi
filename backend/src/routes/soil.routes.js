import express from "express";
import { getSoilData } from "../controllers/soil.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Protected route
router.get("/", authMiddleware, getSoilData);

export default router;
