"use client"

import { useRef } from "react"
import { Code2, Globe, Bot, Zap, ArrowRight, Sparkles, Star } from "lucide-react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  features: string[]
  popular?: boolean
  index: number
}

function ServiceCard({ icon, title, description, gradient, features, popular, index }: ServiceProps) {
  const rotateXVal = useMotionValue(0)
  const rotateYVal = useMotionValue(0)
  const smoothRotateX = useSpring(rotateXVal, { stiffness: 200, damping: 25 })
  const smoothRotateY = useSpring(rotateYVal, { stiffness: 200, damping: 25 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    rotateXVal.set(((e.clientY - rect.top) / rect.height - 0.5) * 14)
    rotateYVal.set(((e.clientX - rect.left) / rect.width - 0.5) * -14)
  }

  return (
    <motion.div
      className={`group relative p-8 rounded-3xl transition-shadow duration-500 hover:shadow-2xl ${
        popular
          ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white ring-2 ring-violet-400/50 shadow-xl shadow-violet-500/20"
          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { rotateXVal.set(0); rotateYVal.set(0) }}
      style={{
        transformPerspective: 1000,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 text-xs font-black rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
          <Star size={12} fill="currentColor" />
          Más solicitado
        </div>
      )}

      {/* Gradient overlay on hover (non-popular only) */}
      {!popular && (
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}
        />
      )}

      {/* Icon */}
      <div className="relative">
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
            popular
              ? "bg-white/20 text-white"
              : `bg-gradient-to-br ${gradient} text-white shadow-lg`
          } mb-6`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        {!popular && (
          <div
            className={`absolute top-0 left-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
          />
        )}
      </div>

      <h3 className={`relative text-2xl font-bold mb-3 ${
        popular
          ? "text-white"
          : "text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-500 dark:group-hover:from-blue-400 dark:group-hover:to-violet-400 group-hover:bg-clip-text"
      } transition-all duration-300`}>
        {title}
      </h3>
      <p className={`relative leading-relaxed mb-6 ${
        popular ? "text-white/80" : "text-gray-600 dark:text-gray-300"
      }`}>
        {description}
      </p>

      {/* Feature list */}
      <ul className="relative space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className={`flex items-center gap-2 text-sm ${
            popular ? "text-white/90" : "text-gray-600 dark:text-gray-400"
          }`}>
            <div className={`w-1.5 h-1.5 rounded-full ${
              popular ? "bg-white/80" : "bg-blue-500"
            }`} />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA link */}
      <motion.a
        href="#contact"
        className={`relative inline-flex items-center gap-2 font-semibold text-sm ${
          popular
            ? "text-white hover:text-white/90"
            : "text-blue-600 dark:text-blue-400"
        } transition-all duration-300`}
        whileHover={{ x: 4 }}
      >
        <span>Solicitar cotización</span>
        <ArrowRight size={16} />
      </motion.a>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80])

  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Desarrollo a Medida",
      description:
        "Software personalizado con arquitectura robusta que escala con tu negocio y resuelve problemas reales.",
      gradient: "from-blue-500 to-blue-600",
      features: ["Stack moderno (React, Next.js, Node)", "Arquitectura escalable", "Código mantenible y documentado"],
    },
    {
      icon: <Globe size={28} />,
      title: "Aplicaciones Web",
      description:
        "Apps rápidas, responsive y optimizadas para SEO que convierten visitantes en clientes.",
      gradient: "from-teal-500 to-teal-600",
      features: ["Rendimiento optimizado", "Diseño responsive", "SEO y accesibilidad"],
    },
    {
      icon: <Bot size={28} />,
      title: "Chatbots con IA",
      description:
        "Asistentes inteligentes que atienden 24/7, reducen costos y mejoran la experiencia de tus clientes.",
      gradient: "from-violet-500 to-violet-600",
      features: ["Integración con WhatsApp e Instagram", "Respuestas naturales con IA", "Análisis de conversaciones"],
      popular: true,
    },
    {
      icon: <Zap size={28} />,
      title: "Automatizaciones",
      description:
        "Eliminamos tareas repetitivas y conectamos tus herramientas para que tu equipo se enfoque en crecer.",
      gradient: "from-amber-500 to-amber-600",
      features: ["Flujos de trabajo automatizados", "Integración entre plataformas", "Reducción de errores humanos"],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl will-change-transform"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl will-change-transform"
          style={{ y: y2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold mb-6 shadow-lg"
          >
            <Sparkles size={18} />
            <span>Nuestros Servicios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            Soluciones que{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              generan impacto
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cada servicio está diseñado para resolver problemas reales y entregar{" "}
            <span className="font-semibold text-gray-900 dark:text-white">valor medible</span>{" "}
            a tu negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            ¿No encontrás lo que buscás? Contamos con soluciones personalizadas para cada necesidad.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline"
          >
            Hablemos de tu proyecto
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
