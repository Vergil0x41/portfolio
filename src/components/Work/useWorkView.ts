import { useEffect, useState, useRef } from "react"


const useWorkView = () => {
    const ref = useRef<HTMLElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true)
            } else {
            setIsVisible(false)
            }
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px",
        }
        );

        const el = ref.current;
        if (el) observer.observe(el)

        return () => {
        if (el) observer.unobserve(el)
        observer.disconnect()
        };
    }, [])

    return { ref, isVisible }
}

export default useWorkView