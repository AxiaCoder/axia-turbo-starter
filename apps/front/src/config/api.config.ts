import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import i18n from "i18next";
import { i18n as AxiaI18n } from "@axia/i18n";

export const initQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });
};

export const initAxios = () => {
  const { VITE_API_BASE_URL } = import.meta.env;
  axios.defaults.baseURL = VITE_API_BASE_URL || "http://localhost:3333";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const lang = i18n.language;
      if (lang) {
        config.headers["x-custom-lang"] = AxiaI18n.convertToLocale(lang);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export const initAxiosUserHeader = (user: string | null) => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("clerk-db-jwt");
      if (token) {
        config.headers.clerk_key = token;
      }
      if (user) {
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
