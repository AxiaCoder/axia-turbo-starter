import { en } from "./en";
import { fr } from "./fr";

export const i18n = {
  convertToLocale: (lang: string) => {
    if (lang.length <= 2) {
      switch (lang) {
        case "en":
          return "en_GB";
        case "fr":
          return "fr_FR";
        default:
          return "en_GB";
      }
    }

    return lang.replace("-", "_");
  },
  path: "./i18n/",
  en,
  fr,
};
