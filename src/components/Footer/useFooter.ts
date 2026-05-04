import { useEffect, useRef, useState } from "react"

const useFooter = () => {
    const ref = useRef<HTMLElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true)
            }
        },
        {
            threshold: 0.1
        }
        )

        if (ref.current) {
        observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
    }

export default useFooter