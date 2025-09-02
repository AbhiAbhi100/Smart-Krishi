import { fetchMarketPrices } from "../services/market.service.js";

export const getMarketPrices = async (req, res) => {
  try {
    const { crop } = req.query;
    if (!crop) {
      return res.status(400).json({ success: false, message: "crop required" });
    }

    const prices = await fetchMarketPrices(crop);
    res.json({ success: true, crop, prices });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
