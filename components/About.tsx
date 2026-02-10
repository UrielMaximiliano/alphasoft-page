"use client"

import { useRef } from "react"
import { Target, Lightbulb, TrendingUp, Users, Heart, Award } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60])

  const values = [
    {
      icon: <Lightbulb size={22} />,
      title: "Innovación",
      description: "Tecnologías de vanguardia para soluciones únicas",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Crecimiento",
      description: "Aprendizaje constante y mejora en cada proyecto",
      gradient: "from-violet-500 to-violet-600",
    },
    {
      icon: <Heart size={22} />,
      title: "Compromiso",
      description: "Tu éxito es nuestra prioridad número uno",
      gradient: "from-amber-500 to-amber-600",
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
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-transparent rounded-full blur-3xl will-change-transform"
          style={{ y: y2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 font-semibold mb-6">
            <Users size={18} />
            <span>Sobre Nosotros</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Jóvenes con{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              visión global
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos estudiantes de Ingeniería en Sistemas que convirtieron su pasión por la tecnología en un{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              estudio de software profesional
            </span>
            . Combinamos energía, talento y las últimas tendencias del mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Team */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl opacity-10 blur-2xl" />

              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-2xl overflow-hidden p-10 border border-gray-200 dark:border-gray-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-full blur-3xl" />

                <div className="flex items-center gap-2 mb-8 justify-center">
                  <Award size={22} className="text-violet-500" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white relative">
                    Los fundadores
                  </h3>
                </div>

                {/* Team photos */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  <motion.div
                    className="group relative text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
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
                    <p className="text-sm text-blue-500 dark:text-blue-400 font-medium">
                      Co-fundador & Dev
                    </p>
                  </motion.div>

                  <motion.div
                    className="group relative text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
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
                    <p className="text-sm text-violet-500 dark:text-violet-400 font-medium">
                      Co-fundador & Dev
                    </p>
                  </motion.div>
                </div>

                <div className="relative text-center space-y-3">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    No somos una agencia más. Somos dos desarrolladores apasionados que 
                    tratan cada proyecto como si fuera propio.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    Nuestra ventaja: la combinación de conocimiento académico actualizado, 
                    hambre de resultados y costos que emprendedores y PyMEs pueden pagar.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Values & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-600 shadow-xl">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white"
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
                      Democratizar el acceso a software de calidad. Que cada emprendedor, 
                      startup o PyME pueda competir con los grandes gracias a tecnología 
                      bien construida y a un precio justo.
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
                  className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-4`}>
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
