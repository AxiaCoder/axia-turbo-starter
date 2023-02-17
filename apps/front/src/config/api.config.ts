import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

export const initQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });

export const initAxios = (user: string | null) => {
  const { VITE_API_BASE_URL } = import.meta.env;
  axios.defaults.baseURL = VITE_API_BASE_URL || "http://localhost:3333";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("clerk-db-jwt");
      if (token) {
        config.headers.clerk_key = token;
      }
      if (token) {
        config.headers.clerk_user = user;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export const registerBearerToken = (token: string | null) => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
};
