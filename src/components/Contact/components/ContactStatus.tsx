import type { FC } from "react"
import { useTranslation } from "react-i18next"

type Props = {
  status: "idle" | "sending" | "success" | "error"
}

const ContactStatus: FC<Props> = ({ status }) => {

    const { t } = useTranslation()

    if (status === "idle") return null

    return (
        <div className={`contact__status contact__status--${status}`}>
        {status === "sending" && t('contact.sending')}
        {status === "success" && t('contact.status.success')}
        {status === "error" && t('contact.status.error')}
        </div>
    )
}

export default ContactStatus