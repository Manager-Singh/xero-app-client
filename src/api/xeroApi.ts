import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // your Node API
});

export const getConnectUrl = async () => {
  const response = await api.get("/connect");
  return response.data;
};

export const getContacts = async () => {
  const response = await api.get("/contacts");
  return response.data;
};
