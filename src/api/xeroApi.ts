import axios from "axios";

const api = axios.create({
  baseURL:import.meta.env.VITE_API_URL, 
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

export const getthemes = async () => {
  const response = await api.get("/api/xero/themes");
  return response.data;
};
