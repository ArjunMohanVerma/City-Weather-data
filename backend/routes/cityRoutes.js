import express from "express";

import {
  getAllCities,
  getCityHistory,
} from "../controllers/cityController.js";

const router = express.Router();

router.get("/", getAllCities);

router.get("/:city/history", getCityHistory);

export default router;