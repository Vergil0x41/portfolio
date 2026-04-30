import { useState } from "react"
import i18n from "../i18n/i18n"

type Lang = "en" | "ru";

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "en"
  )

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ru" : "en"

    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  }

  return { lang, toggleLanguage }
}