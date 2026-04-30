import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"
import ru from "./locales/ru.json"

const savedLang = localStorage.getItem("lang");

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },

    lng: savedLang || "en",

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;