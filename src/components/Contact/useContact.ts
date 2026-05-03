import { useState } from "react"
import { useTranslation } from "react-i18next"

type Status = "idle" | "sending" | "success" | "error"

type Form = {
  name: string
  email: string
  message: string
}

const useContact = () => {

    const { t } = useTranslation()

    const [form, setForm] = useState<Form>({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [status, setStatus] = useState<Status>("idle")
    const [isSending, setIsSending] = useState(false)

    const validate = (values: Form = form) => {
        const newErrors: Record<string, string> = {}

        if (!values.name.trim()) {
        newErrors.name = t('contact.required')
        }

        if (!values.email.trim()) {
        newErrors.email = t('contact.required')
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        newErrors.email = t('contact.invalid_email')
        }

        if (!values.message.trim()) {
        newErrors.message = t('contact.required')
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        const updatedForm = {
        ...form,
        [name]: value
        }

        setForm(updatedForm)

        setErrors((prev) => {
        const updated = { ...prev }

        if (name === "name") {
            if (!value.trim()) updated.name = t('contact.required')
            else delete updated.name
        }

        if (name === "email") {
            if (!value.trim()) updated.email = t('contact.required')
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
            updated.email = t('contact.invalid_email')
            else delete updated.email
        }

        if (name === "message") {
            if (!value.trim()) updated.message = t('contact.required')
            else delete updated.message
        }

        return updated
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validate()) return

        setIsSending(true)
        setStatus("sending")

        try {
       
        await new Promise((res) => setTimeout(res, 1000))

        setStatus("success")

        setTimeout(() => {
            setForm({
            name: "",
            email: "",
            message: ""
            })
            setErrors({})
            setStatus("idle")
            setIsSending(false)
        }, 1000)
        } catch (err) {
        setStatus("error")
        setIsSending(false)
        }
    }

    const isValid =
        form.name.trim().length > 0 &&
        form.email.trim().length > 0 &&
        form.message.trim().length > 0 &&
        Object.keys(errors).length === 0

    return {
        form,
        errors,
        status,
        isSending,
        isValid,
        handleChange,
        handleSubmit
    }
}

export default useContact