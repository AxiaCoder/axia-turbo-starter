import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./screens/App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18n as AxiaI18n } from "@axia/i18n";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: AxiaI18n.en,
      },
      fr: {
        translation: AxiaI18n.fr,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
