import type { FC } from "react"
import Navbar from "./components/Navbar/Navbar"
import { useTheme } from "./store/useTheme"
import { useLanguage } from "./store/useLanguage"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"


const App:FC = () => {
  
  useTheme()
  useLanguage()

  return (
      <>
        <Navbar/>
        <Hero/>
        <About/>
      </>
  )
}

export default App