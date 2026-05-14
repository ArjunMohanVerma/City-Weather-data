import cron from "node-cron";

import CityData from "../models/CityData.js";

import cities from "./cityList.js";

import getWeatherData from "../services/weatherService.js";
import getAQIData from "../services/aqiService.js";
import getPopulationData from "../services/populationService.js";
import getCurrencyRate from "../services/currencyService.js";

const fetchAndStoreData = async () => {
  console.log("Fetching latest city data...");

  try {
    for (const cityInfo of cities) {
      const weather = await getWeatherData(
        cityInfo.lat,
        cityInfo.lon
      );

      const airQuality = await getAQIData(
        cityInfo.lat,
        cityInfo.lon
      );

      const population = await getPopulationData(
        cityInfo.city
      );

      const rateToINR = await getCurrencyRate(
        cityInfo.currency
      );

      await CityData.create({
        city: cityInfo.city,
        country: cityInfo.country,

        coordinates: {
          lat: cityInfo.lat,
          lon: cityInfo.lon,
        },

        weather,

        airQuality,

        population,

        currency: {
          code: cityInfo.currency,
          rateToINR,
        },

        sourceUpdatedAt: new Date(),
      });

      console.log(`${cityInfo.city} data stored`);
    }

    console.log("All city data updated");
  } catch (error) {
    console.log("Scheduler Error:", error.message);
  }
};

cron.schedule("*/30 * * * *", async () => {
  await fetchAndStoreData();
});

export default fetchAndStoreData;