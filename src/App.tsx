<<<<<<< HEAD
import { ThemeProvider } from "./contexts/ThemeContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"
=======
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab

function App() {
  return (
    <ThemeProvider>
<<<<<<< HEAD
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
=======
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
      </div>
    </ThemeProvider>
  )
}

export default App
