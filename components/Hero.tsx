"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const technologies = [
    { name: "React", Icon: Code2, color: "from-cyan-500 to-blue-600" },
    { name: "TypeScript", Icon: Sparkles, color: "from-blue-500 to-indigo-600" },
    { name: "Node.js", Icon: Zap, color: "from-green-500 to-emerald-600" },
    { name: "Cloud", Icon: Sparkles, color: "from-purple-500 to-pink-600" },
  ]

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, -50, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30">
              <Sparkles size={16} className="mr-2" />
              Soluciones de Software Innovadoras
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-6xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Construye el
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              futuro digital
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transformamos ideas en experiencias digitales extraordinarias. Código
            limpio, arquitectura robusta y resultados que superan expectativas.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary group text-lg px-8 py-4 shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Comenzar Ahora
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline text-lg px-8 py-4 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Ver Servicios
                <Zap size={20} />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <tech.Icon size={24} />
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
