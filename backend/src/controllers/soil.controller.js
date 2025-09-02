import { fetchSoilData } from "../services/soil.service.js";

export const getSoilData = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ success: false, message: "latitude & longitude chaiye " });
    }

    const data = await fetchSoilData(lat, lon);
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
