import "./Navbar.scss"
import { Switch } from "../UI/Switch"
import type { FC } from "react"
import { useTheme } from "../../store/useTheme"
import { useLanguage } from "../../store/useLanguage"
import { useTranslation } from "react-i18next"
import Burger from "./Burger/Burger"

const Navbar:FC = () => {

  const { t } = useTranslation()

  const { toggleTheme, theme} = useTheme()

  const { lang, toggleLanguage  } = useLanguage()

  return (
    <nav className="nav container">

      <div className="nav__links">
        <a href="#about">{t('nav.about')}</a>
        <a href="#work">{t('nav.work')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </div>

      <div className="nav__controls">

        <Switch
          active={lang == "ru"}
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
      <Burger theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLanguage={toggleLanguage}/>

    </nav>
  )
}

export default Navbar