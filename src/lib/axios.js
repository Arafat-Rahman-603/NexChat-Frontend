import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nexchat-backend-kzal.onrender.com/api",
  withCredentials: true,
});
