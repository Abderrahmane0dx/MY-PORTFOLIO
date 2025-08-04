import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Skills from "./sections/Skills"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Showcase/>
      <Skills/>
      <LogoSection/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
