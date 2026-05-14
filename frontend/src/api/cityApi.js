import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getCities = async () => {
  const response = await API.get("/cities");
  return response.data;
};

export const getCityHistory = async (city) => {
  const response = await API.get(`/cities/${city}/history`);
  return response.data;
};