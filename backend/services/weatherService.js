import axios from "axios";

const getWeatherData = async (lat, lon) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;

    const response = await axios.get(url);

    return {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].main,
      windSpeed: response.data.wind.speed,
    };
  } catch (error) {
    console.log("Weather API Error:", error.message);
    return null;
  }
};

export default getWeatherData;