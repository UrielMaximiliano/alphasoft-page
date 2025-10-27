<<<<<<< HEAD
"use client"

import type React from "react"
import { useEffect, useState, useRef, memo } from "react"
import { Code2, Globe, Bot, Zap, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const ServiceCard: React.FC<ServiceProps> = memo(({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Disconnect after first intersection for performance
        }
      },
      { threshold: 0.2 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
=======
import React, { useEffect, useState, useRef } from 'react';
import {
  Code2,
  Globe,
  Bot,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, gradient, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? 'fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}></div>

      {/* Icon with gradient background */}
      <div className="relative">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          {icon}
        </div>
        <div className={`absolute top-0 left-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
      </div>

      <h3 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{description}</p>

      {/* Learn more link */}
      <div className="relative flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span>Más información</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Desarrollo Personalizado",
      description: "Soluciones de software a medida construidas con las mejores prácticas y tecnologías modernas.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe size={28} />,
      title: "Aplicaciones Web",
      description: "Aplicaciones web responsivas y escalables que ayudan a impulsar el crecimiento de tu negocio.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Bot size={28} />,
      title: "Chatbots Inteligentes",
      description: "Chatbots con IA que mejoran la atención al cliente y automatizan conversaciones de manera eficiente.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap size={28} />,
      title: "Automatizaciones",
      description: "Automatizamos procesos empresariales para aumentar la eficiencia y optimizar costos operativos.",
      gradient: "from-orange-500 to-red-500"
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
    }

    return () => observer.disconnect()
  }, [])

  return (
<<<<<<< HEAD
    <motion.div
      ref={cardRef}
      className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-2xl overflow-hidden will-change-transform"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -8 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 transition-all duration-300"
        whileHover={{
          background: "linear-gradient(to bottom right, rgba(59,130,246,0.05), rgba(147,51,234,0.05))",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-lg will-change-transform"
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
    </motion.div>
  )
})

ServiceCard.displayName = "ServiceCard"

const Services: React.FC = () => {
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
          observer.disconnect() // Disconnect after first intersection
        }
      },
      { threshold: 0.2 },
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
    },
    {
      icon: <Globe size={28} />,
      title: "Aplicaciones Web",
      description:
        "Aplicaciones web responsivas, rápidas y escalables que ofrecen experiencias excepcionales en cualquier dispositivo.",
    },
    {
      icon: <Bot size={28} />,
      title: "Chatbots Inteligentes",
      description:
        "Chatbots con IA que transforman la atención al cliente y automatizan conversaciones de manera eficiente y natural.",
    },
    {
      icon: <Zap size={28} />,
      title: "Automatizaciones",
      description:
        "Automatizamos procesos empresariales para maximizar la eficiencia, reducir costos y liberar tiempo valioso.",
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={18} />
            <span>Lo que hacemos</span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluciones de software integrales desarrolladas con{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">dedicación, creatividad</span> y
            conocimiento técnico de vanguardia
          </motion.p>
=======
    <section id="services" className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
            <Zap size={16} />
            Lo que hacemos
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Soluciones de software integrales desarrolladas con dedicación y conocimiento técnico
          </p>
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
<<<<<<< HEAD
=======
              gradient={service.gradient}
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Services)
