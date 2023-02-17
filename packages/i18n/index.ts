import { en } from "./en";
import { fr } from "./fr";

export const i18n = {
  convertToLocale: (lang: string) => {
    lang.slice(0, 2);
  },
  path: "./i18n/",
  en,
  fr,
};
