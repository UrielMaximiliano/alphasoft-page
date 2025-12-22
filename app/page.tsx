"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
