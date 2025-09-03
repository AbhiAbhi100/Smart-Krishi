import express from "express";
import { getMarketPrices } from "../controllers/market.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Protected route
router.get("/", authMiddleware, getMarketPrices);

export default router;
