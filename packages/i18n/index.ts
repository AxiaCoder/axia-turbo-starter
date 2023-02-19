import { en } from "./en";
import { fr } from "./fr";

export const i18n = {
  convertToLocale: (lang: string) => {
    return lang.slice(0, 2);
  },
  getAvailableLanguages: (): { [key: string]: string } => {
    return {
      en: "English",
      fr: "Français",
    };
  },
  path: "./i18n/",
  en,
  fr,
};
