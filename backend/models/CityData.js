import mongoose from "mongoose";

const cityDataSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },

    country: String,

    coordinates: {
      lat: Number,
      lon: Number,
    },

    weather: {
      temperature: Number,
      humidity: Number,
      condition: String,
      windSpeed: Number,
    },

    airQuality: {
      aqi: Number,
      pm25: Number,
      pm10: Number,
    },

    population: Number,

    currency: {
      code: String,
      rateToINR: Number,
    },

    sourceUpdatedAt: Date,
  },
  {
    timestamps: true,
  }
);

/*
  Automatically delete documents
  older than 15 days
*/
cityDataSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 15 * 24 * 60 * 60 }
);

const CityData = mongoose.model("CityData", cityDataSchema);

export default CityData;