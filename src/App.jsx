import Navbar from './components/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Education from './components/sections/Education.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
