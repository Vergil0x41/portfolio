import { useTranslation } from "react-i18next"
import useContact from "./useContact"
import ContactForm from "./components/ContactForm"
import ContactStatus from "./components/ContactStatus"
import useReveal from "./useReveal"
import "./Contact.scss"

const Contact = () => {
        
    const { t } = useTranslation()
    const { ref, isVisible } = useReveal()

    const {
        form,
        errors,
        status,
        isSending,
        isValid,
        handleChange,
        handleSubmit
    } = useContact()

    return (
        <section ref={ref} className={`contact ${isVisible ? "contact--active" : ""}`}>
        <div className="contact__container">

            <p className="contact__label">&gt; {t("contact.label")}</p>

            <h2 className="contact__title">
            {t("contact.title")}
            </h2>

            <div className="contact__panel">

            <ContactForm
                form={form}
                errors={errors}
                isSending={isSending}
                isValid={isValid}
                onChange={handleChange}
                onSubmit={handleSubmit}
                t={t}
            />

            <ContactStatus status={status} />

            </div>

        </div>
        </section>
    )
}

export default Contact