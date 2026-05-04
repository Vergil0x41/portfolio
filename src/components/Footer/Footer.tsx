import useFooter from "./useFooter"
import "./Footer.scss"
import { useTranslation } from "react-i18next"

const Footer = () => {

  const { ref, isVisible } = useFooter()
  const { t } = useTranslation()

  return (
    <footer
      ref={ref}
      className={`footer ${isVisible ? "footer--active" : ""}`}
    >
      <div className="footer__container">

        <p className="footer__text">
          © 2026 — {t('footer.build')}
        </p>

        <div className="footer__links">
          <a href="#" className="footer__link">GitHub</a>
          <a href="#" className="footer__link">Telegram</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer