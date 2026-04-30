import { useEffect, useState } from "react"

const useHero = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [strength, setStrength] = useState(0)

  const isDesktop = window.innerWidth > 1024

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return

    const mouseX = e.clientX
    const mouseY = e.clientY

    setX(mouseX)
    setY(mouseY)

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const dx = mouseX - centerX
    const dy = mouseY - centerY

    const distance = Math.sqrt(dx * dx + dy * dy)

    const power = Math.max(0, 300 - distance * 0.25)

    setStrength(power)
  }

  useEffect(() => {
    setX(window.innerWidth / 2)
    setY(window.innerHeight / 2)
  }, []) 

  return { x, y, strength, handleMouseMove, isDesktop }
}

export default useHero