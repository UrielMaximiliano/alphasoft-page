"use client"

import { Github, Mail, Zap, ArrowRight } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/alphasoft__/",
      gradient: "from-violet-500 to-violet-600",
      label: "Instagram",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:alphasoftwebs@gmail.com",
      gradient: "from-blue-500 to-blue-600",
      label: "Email",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/alphasoft-agency",
      gradient: "from-gray-700 to-gray-900",
      label: "GitHub",
    },
  ]

  const quickLinks = [
    { label: "Servicios", href: "#services" },
    { label: "Proceso", href: "#process" },
    { label: "Nosotros", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ]

  const services = [
    "Desarrollo Web",
    "Aplicaciones Web",
    "Chatbots con IA",
    "Automatizaciones",
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-700 py-16 relative">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 noise-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            No esperes más. Cada día sin la tecnología correcta es una oportunidad perdida.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Empezar Ahora
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white"
                >
                  <Zap size={20} />
                </motion.div>
                <span className="font-black text-2xl bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
                  AlphaSoft
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md">
                Tu aliado tecnológico de confianza. Software que resuelve problemas 
                reales, construido con pasión y atención al detalle.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.gradient} text-white flex items-center justify-center transition-transform shadow-lg`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                Navegación
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                Servicios
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="text-gray-600 dark:text-gray-300 text-sm"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {currentYear} AlphaSoft. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs">
                Hecho con pasión en Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
