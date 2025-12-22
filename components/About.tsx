"use client"

import { useEffect, useState, useRef } from "react"
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("about-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: "Innovación",
      description: "Aplicamos tecnologías modernas para crear soluciones únicas",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Crecimiento",
      description: "Aprendizaje continuo y mejora constante en cada proyecto",
    },
    {
      icon: <Target size={24} />,
      title: "Excelencia",
      description: "Compromiso con la calidad y resultados que superan expectativas",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl will-change-transform"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl will-change-transform"
          style={{ y: y2 }}
        />
      </div>

      <div id="about-section" className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold mb-6"
          >
            <Users size={18} />
            <span>Sobre Nosotros</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            Acerca de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AlphaSoft
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Fundada sobre los principios de{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              innovación, aprendizaje continuo y excelencia
            </span>
            .
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Team */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-10 blur-2xl" />

              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-2xl overflow-hidden p-10 border border-gray-200 dark:border-gray-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center relative">
                  Nuestro Equipo
                </h3>

                {/* Team photos */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  <motion.div
                    className="group relative text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl mx-auto mb-3">
                        <Image
                          src="/foto-nico.jpg"
                          alt="Nico - Co-fundador"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      Nico
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Co-fundador
                    </p>
                  </motion.div>

                  <motion.div
                    className="group relative text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl mx-auto mb-3">
                        <Image
                          src="/foto-uriel.jpg"
                          alt="Uriel - Co-fundador"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      Uriel
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Co-fundador
                    </p>
                  </motion.div>
                </div>

                <div className="relative text-center space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Somos estudiantes apasionados de Ingeniería en Sistemas,
                    comprometidos con la excelencia y la innovación en el
                    desarrollo de software.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Nuestra dedicación, creatividad y ganas de aprender nos
                    permiten entregar soluciones de calidad que superan las
                    expectativas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Values & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-600 shadow-xl">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Target size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      Nuestra Misión
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Aplicar nuestros conocimientos y pasión por la tecnología
                      para crear soluciones de software innovadoras que ayuden a
                      las empresas a crecer y tener éxito en la era digital.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
