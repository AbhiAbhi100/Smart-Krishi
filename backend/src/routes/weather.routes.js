import express from "express";
import { getWeatherData } from "../controllers/weather.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Protected route
router.get("/", authMiddleware, getWeatherData);

export default router;
