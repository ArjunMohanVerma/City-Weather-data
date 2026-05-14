import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import AQIBadge from "./AQIBadge";
import TemperatureGauge from "./TemperatureGauge";
import TrendChart from "./TrendChart";

import { getCityHistory } from "../api/cityApi";

const CityModal = ({ city, onClose }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const data = await getCityHistory(city.city);
      setHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-9999 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-900 w-full max-w-3xl rounded-2xl p-6 border border-slate-700"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-cyan-400">
            {city.city}
          </h2>

          <button
            onClick={onClose}
            className="text-red-400 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4">
            <TemperatureGauge
              temp={city.weather.temperature}
            />

            <AQIBadge aqi={city.airQuality.aqi} />

            <div className="bg-slate-800 rounded-xl p-4">
              <p>Humidity: {city.weather.humidity}%</p>

              <p>Condition: {city.weather.condition}</p>

              <p>Wind: {city.weather.windSpeed} m/s</p>

              <p>Population: {city.population}</p>

              <p>
                Currency: {city.currency.code}
              </p>

              <p>
                INR Rate: {city.currency.rateToINR}
              </p>

              <p className="text-sm text-slate-400 mt-2">
                Updated:
                {" "}
                {new Date(
                  city.sourceUpdatedAt
                ).toLocaleString()}
              </p>
            </div>
          </div>

          <TrendChart data={history} />
        </div>
      </motion.div>
    </div>
  );
};

export default CityModal;