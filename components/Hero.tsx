"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Zap, Shield, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentWord, setCurrentWord] = useState(0)

  const rotatingWords = ["extraordinarias", "escalables", "innovadoras", "rentables"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let rafId: number
    let lastTime = 0
    const throttleDelay = 50

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()

      if (currentTime - lastTime >= throttleDelay) {
        if (rafId) cancelAnimationFrame(rafId)

        rafId = requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth - 0.5) * 15,
            y: (e.clientY / window.innerHeight - 0.5) * 15,
          })
        })

        lastTime = currentTime
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const trustBadges = [
    { icon: <Shield size={18} />, text: "Código seguro" },
    { icon: <Clock size={18} />, text: "Entrega puntual" },
    { icon: <Star size={18} />, text: "Soporte dedicado" },
  ]

  return (
    <section className="relative pt-28 pb-8 overflow-hidden min-h-screen flex items-center">
      {/* Aurora background */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 left-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] will-change-transform"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-96 h-96 bg-violet-500/12 rounded-full blur-[120px] will-change-transform"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* 3D floating shapes */}
      <motion.div
        className="absolute top-[20%] right-[12%] w-16 h-16 border border-blue-500/20 rounded-lg hidden md:block"
        animate={{ rotateX: [0, 360], rotateY: [0, 180], y: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute bottom-[35%] left-[8%] w-12 h-12 border border-violet-500/15 rounded-md hidden md:block"
        animate={{ rotateZ: [0, 360], rotateX: [0, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformPerspective: 600, transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute top-[55%] right-[22%] w-8 h-8 bg-blue-500/10 rounded-sm hidden md:block"
        animate={{ rotateY: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ transformPerspective: 400, transformStyle: "preserve-3d" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-200/50 dark:shadow-black/30">
              <span className="relative flex h-2.5 w-2.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Aceptando nuevos proyectos 2026
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Tu idea merece
            <br />
            <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-teal-400 bg-clip-text text-transparent bg-200% gradient-text-animated">
                software de élite
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Desarrollamos aplicaciones web, chatbots con IA y automatizaciones que generan{" "}
            <span className="font-bold text-gray-900 dark:text-white">resultados reales</span> para tu negocio.
            <br className="hidden sm:block" />
            Soluciones{" "}
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="inline-block font-bold bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent"
            >
              {rotatingWords[currentWord]}
            </motion.span>
            {" "}desde el día uno.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-violet-500/40 transition-all duration-300 shimmer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Solicitar Cotización Gratis
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group px-10 py-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-white rounded-2xl font-bold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-lg"
            >
              <span className="flex items-center justify-center gap-3">
                Ver Servicios
                <Zap size={20} className="text-violet-500" />
              </span>
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-blue-500">{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { value: "100%", label: "Compromiso", accent: "blue" },
              { value: "24/7", label: "Soporte activo", accent: "violet" },
              { value: "2+", label: "Proyectos en producción", accent: "teal" },
              { value: "5★", label: "Satisfacción", accent: "amber" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/60 hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all duration-500"
                whileHover={{ y: -4, rotateX: -5, rotateY: 3 }}
                style={{ transformPerspective: 800 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + index * 0.08 }}
              >
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${
                  stat.accent === "blue" ? "from-blue-600 to-blue-400" :
                  stat.accent === "violet" ? "from-violet-600 to-violet-400" :
                  stat.accent === "teal" ? "from-teal-600 to-teal-400" :
                  "from-amber-500 to-amber-400"
                } bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />
    </section>
  )
}
