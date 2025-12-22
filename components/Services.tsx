"use client"

import { useEffect, useState, useRef } from "react"
import { Code2, Globe, Bot, Zap, ArrowRight, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  index: number
}

function ServiceCard({ icon, title, description, gradient, index }: ServiceProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="group relative p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Icon with gradient background */}
      <div className="relative">
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <div
          className={`absolute top-0 left-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
        />
      </div>

      <h3 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        {description}
      </p>

      {/* Learn more link */}
      <div className="relative flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span>Más información</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Desarrollo Personalizado",
      description:
        "Soluciones de software a medida construidas con las mejores prácticas y tecnologías modernas que impulsan tu negocio.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Globe size={28} />,
      title: "Aplicaciones Web",
      description:
        "Aplicaciones web responsivas, rápidas y escalables que ofrecen experiencias excepcionales en cualquier dispositivo.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Bot size={28} />,
      title: "Chatbots Inteligentes",
      description:
        "Chatbots con IA que transforman la atención al cliente y automatizan conversaciones de manera eficiente y natural.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap size={28} />,
      title: "Automatizaciones",
      description:
        "Automatizamos procesos empresariales para maximizar la eficiencia, reducir costos y liberar tiempo valioso.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl will-change-transform"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl will-change-transform"
          style={{ y: y2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold mb-6 shadow-lg"
          >
            <Sparkles size={18} />
            <span>Nuestros Servicios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            Lo que{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ofrecemos
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Soluciones completas para llevar tu negocio al siguiente nivel con
            tecnología de vanguardia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
