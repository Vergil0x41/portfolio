import { useEffect, useState } from "react"
import type { Theme } from "../types";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme;
    return saved === "neon" ? "neon" : "dark";
  });

  useEffect(() => {
    if (theme === "neon") {
      document.body.setAttribute("data-theme", "neon")
    } else {
      document.body.removeAttribute("data-theme")
    }

    localStorage.setItem("theme", theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "neon" : "dark"))
  };

  return { theme, toggleTheme }
}