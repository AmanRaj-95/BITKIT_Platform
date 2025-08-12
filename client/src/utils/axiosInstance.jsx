// // src/utils/axiosInstance.js
// import axios from "axios";
// import { getAuth } from "firebase/auth";

// const axiosInstance = axios.create({
//   baseURL: "/api/v1", // optional: adjust if needed
// });

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//       const token = await user.getIdToken();
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default axiosInstance;
// src/utils/axiosInstance.js
import axios from "axios";
import { getAuth } from "firebase/auth";

const apiBaseUrl = process.env.NODE_ENV === "production"
  ? "https://bitkit-server.onrender.com/api/v1"
  : "/api/v1";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

