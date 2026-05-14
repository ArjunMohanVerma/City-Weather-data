import CityData from "../models/CityData.js";

export const getAllCities = async (req, res) => {
  try {
    const data = await CityData.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCityHistory = async (req, res) => {
  try {
    const { city } = req.params;

    const history = await CityData.find({
      city,
    }).sort({ createdAt: -1 });

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};