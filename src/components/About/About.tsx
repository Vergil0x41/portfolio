import type { FC } from "react"
import "./About.scss"
import useAbout from "./useAbout"
import { useTranslation } from "react-i18next"
const About: FC = () => {

  const { ref, visible } = useAbout()
  const { t } = useTranslation()

  return (
    <section
      ref={ref}
      id="about"
      className={`about ${visible ? "visible" : ""}`}
    >
      <div className="about__container container">

        <div className="about__header">
          <span className="about__label">{t('about.profile')}</span>
          <h2>{t("about.title")}</h2>
        </div>

        <div className="about__grid">

          <div className="about__info">
            <p>{t("about.description")}</p>
          </div>

          <div className="about__stats">

            <div className="stat">
              <span>2+</span>
              <p>{t("about.exp")}</p>
            </div>

            <div className="stat">
              <span>React / TS</span>
              <p>{t('about.stack')}</p>
            </div>

            <div className="stat">
              <span>UI / UX</span>
              <p>{t('about.focus')}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )

}

export default About