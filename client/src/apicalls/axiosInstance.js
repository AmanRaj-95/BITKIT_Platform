import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api/v1/buy-sell",
});

// Dynamically attach token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 