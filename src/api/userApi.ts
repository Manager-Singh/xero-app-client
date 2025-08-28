import axios from "axios";

const api = axios.create({
  baseURL:import.meta.env.VITE_API_URL, 
});

export const register = async (userData: any) => {
  const response = await api.post("/api/users/register",userData);
  return response.data;
};
export const login = async (userData: any) => {
  const response = await api.post("/api/users/login",userData);
  return response.data;
};


