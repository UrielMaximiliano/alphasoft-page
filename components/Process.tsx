"use client"

import { useRef } from "react"
import { MessageSquare, Palette, Code2, Rocket, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Analizamos tu idea, tus objetivos y tu mercado para diseñar la estrategia perfecta.",
    icon: <MessageSquare size={24} />,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creamos prototipos y diseños UI/UX que enamoran a tus usuarios desde el primer clic.",
    icon: <Palette size={24} />,
    gradient: "from-teal-500 to-teal-600",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos tu solución con código limpio, tecnologías modernas y buenas prácticas.",
    icon: <Code2 size={24} />,
    gradient: "from-violet-500 to-violet-600",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Desplegamos, optimizamos y te acompañamos para asegurar el éxito de tu proyecto.",
    icon: <Rocket size={24} />,
    gradient: "from-amber-500 to-amber-600",
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 aurora-bg opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold mb-6 shadow-sm">
            <ArrowRight size={18} className="text-blue-500" />
            <span>Cómo Trabajamos</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Del concepto al{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              lanzamiento
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Un proceso claro y transparente que garantiza resultados excepcionales en cada etapa.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-amber-400 rounded-full"
              style={{ width: lineHeight }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative"
              >
                <div className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-xl mb-6`}
                  >
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <span className="text-xs font-black text-gray-900 dark:text-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-500 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 shimmer overflow-hidden relative"
          >
            <span className="relative z-10">Iniciar mi Proyecto</span>
            <Rocket size={20} className="relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
