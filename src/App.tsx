import type { FC } from "react"
import Navbar from "./components/Navbar/Navbar"
import { useTheme } from "./store/useTheme"
import { useLanguage } from "./store/useLanguage"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


const App:FC = () => {
  
  useTheme()
  useLanguage()

  return (
      <>
        <Navbar/>
        <Hero/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </>
  )
}

export default App