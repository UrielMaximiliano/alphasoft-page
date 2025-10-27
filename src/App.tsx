import { ThemeProvider } from "./contexts/ThemeContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
