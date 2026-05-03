import type { FC } from "react"

type Props = {
  form: any
  errors: Record<string, string>
  isSending: boolean
  isValid: boolean
  onChange: (e: any) => void
  onSubmit: (e: any) => void
  t: any
}

const ContactForm: FC<Props> = ({
  form,
  errors,
  isSending,
  isValid,
  onChange,
  onSubmit,
  t
}) => {
    return (
        <form className="contact__form" onSubmit={onSubmit}>

        <div className="contact__field">
            <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={t("contact.name")}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
        </div>

        <div className="contact__field">
            <input
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder={t("contact.email")}
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
        </div>

        <div className="contact__field">
            <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder={t("contact.message")}
            />
            {errors.message && <span className="contact__error">{errors.message}</span>}
        </div>

        <button
            className="contact__button"
            disabled={!isValid || isSending}
        >
            {isSending ? t("contact.sending") : t("contact.send")}
        </button>

        </form>
    )
}

export default ContactForm