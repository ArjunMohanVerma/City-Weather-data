import axios from "axios";

const getAQIData = async (lat, lon) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`;

    const response = await axios.get(url);

    return {
      aqi: response.data.list[0].main.aqi,
      pm25: response.data.list[0].components.pm2_5,
      pm10: response.data.list[0].components.pm10,
    };
  } catch (error) {
    console.log("AQI API Error:", error.message);
    return null;
  }
};

export default getAQIData;