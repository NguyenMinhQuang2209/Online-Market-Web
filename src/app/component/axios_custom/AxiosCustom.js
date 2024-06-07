// axiosInstance.js

import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000, 
  withCredentials:true
});

// Function to check if token is expired
const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime;
  } catch (error) {
    return true; // Error in decoding or expired
  }
};

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      if (isTokenExpired(token)) {
        try {
          const response = await axios.get("/auth/get_new_token", {
            withCredentials: true,
          });
          localStorage.setItem('token',response?.data?.token);
          config.headers.Authorization = `Bearer ${response?.data?.token}`;
        } catch (refreshError) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
