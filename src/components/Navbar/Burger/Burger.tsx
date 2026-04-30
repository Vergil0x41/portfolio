import useBurger from "./useBurger"
import "./Burger.scss"
import { useTranslation } from "react-i18next"
import type { FC } from "react"
import { Switch } from "../../UI/Switch"

type Props = {
  theme: "dark" | "neon";
  toggleTheme: () => void;
  lang: "en" | "ru";
  toggleLanguage: () => void;
};

const Burger: FC<Props> = ({ theme, toggleTheme, lang, toggleLanguage }) => {

  const { isOpen, toggle, close } = useBurger();
  const { t } = useTranslation();

  return (
    <>
      <button
        className={`burger ${isOpen ? "active" : ""}`}
        onClick={toggle}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`portal ${isOpen ? "open" : ""}`}>
        <div className="portal__overlay" onClick={close} />

        <div className="portal__core" />

        <div className="menu">
          <nav className="menu__content">

            <a href="#about" onClick={close}>{t("nav.about")}</a>
            <a href="#work" onClick={close}>{t("nav.work")}</a>
            <a href="#contact" onClick={close}>{t("nav.contact")}</a>

            
            <div className="menu__controls">

              <Switch
                active={lang === "ru"}
                onClick={toggleLanguage}
                left="EN"
                right="RU"
              />

              <Switch
                active={theme === "neon"}
                onClick={toggleTheme}
                left="DARK"
                right="NEON"
              />

            </div>

          </nav>
        </div>
      </div>
    </>
  );
}

export default Burger