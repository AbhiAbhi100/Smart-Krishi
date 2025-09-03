import express from "express";
import authRoutes from "./auth.routes.js";
import soilRoutes from "./soil.routes.js";
import weatherRoutes from "./weather.routes.js";
import marketRoutes from "./market.routes.js";

const router = express.Router();

//for refrencing writing the link what will be the link (postmandoc)
router.use("/auth", authRoutes);       // /api/auth/...
router.use("/soil", soilRoutes);       // /api/soil
router.use("/weather", weatherRoutes); // /api/weather
router.use("/market", marketRoutes);   // /api/market

export default router;
