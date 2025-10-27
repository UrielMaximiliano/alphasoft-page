"use client"

import type React from "react"
import { useEffect, useState, useRef, memo } from "react"
import { Target, Lightbulb, Users } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const About: React.FC = () => {
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
          observer.disconnect() // Disconnect after first intersection
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-white dark:bg-gray-800 relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Users size={18} />
              <span>Sobre Nosotros</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Acerca de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AlphaSoft
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Fundada sobre los principios de{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                innovación, aprendizaje continuo y excelencia
              </span>
              , AlphaSoft entrega soluciones que no solo satisfacen las necesidades actuales, sino que demuestran
              nuestro compromiso con el crecimiento y la mejora constante.
            </motion.p>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-600 shadow-xl">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white will-change-transform"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Target size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Nuestra Misión</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Aplicar nuestros conocimientos y pasión por la tecnología para crear soluciones de software
                      innovadoras que ayuden a las empresas a crecer y tener éxito en la era digital.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-15 blur-xl" />
              <div className="relative bg-white dark:bg-gray-700 rounded-3xl shadow-2xl overflow-hidden p-10 border border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white will-change-transform"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Lightbulb size={20} />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Nuestro Equipo</h3>
                </div>

                <div className="flex justify-center items-center gap-12 mb-8">
                  <motion.div
                    className="relative group text-center"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-lg opacity-30"
                      whileHover={{ opacity: 0.5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl cursor-pointer mx-auto mb-3">
                      <img
                        src="/foto-nico.jpg"
                        alt="Nico - Estudiante de Ingeniería en Sistemas"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Nico</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                  </motion.div>

                  <motion.div
                    className="relative group text-center"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-lg opacity-30"
                      whileHover={{ opacity: 0.5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl cursor-pointer mx-auto mb-3">
                      <img
                        src="/foto-uriel.jpg"
                        alt="Uriel - Estudiante de Ingeniería en Sistemas"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Uriel</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                  </motion.div>
                </div>

                <motion.div
                  className="text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Somos estudiantes apasionados de{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Ingeniería en Sistemas</span>,
                    comprometidos con la excelencia y la innovación en el desarrollo de software.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aunque estamos en formación, nuestra{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      dedicación, creatividad y ganas de aprender
                    </span>
                    nos permiten entregar soluciones de calidad que superan las expectativas.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
