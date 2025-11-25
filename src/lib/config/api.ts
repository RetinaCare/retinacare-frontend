import axios from "axios";
const baseURL =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL,
  timeout: 1000 * 60,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  async (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";
    if (config.headers) {
      config.headers.set("Authorization", `Bearer ${token}`);
    } else {
      config.headers = new axios.AxiosHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

export default api;
