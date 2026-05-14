import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import cityRoutes from "./routes/cityRoutes.js";

import fetchAndStoreData from "./utils/scheduler.js";

import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors({
    origin: "*"
  }));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Global City Insights API Running",
  });
});

app.use("/api/cities", cityRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  // Initial fetch
  await fetchAndStoreData();
});