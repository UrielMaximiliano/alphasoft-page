"use client"

import { Github, Mail, Zap, Heart } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/alphasoft__/",
      gradient: "from-pink-500 to-purple-600",
      label: "Instagram",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:alphasoftwebs@gmail.com",
      gradient: "from-blue-500 to-cyan-600",
      label: "Email",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      gradient: "from-gray-700 to-gray-900",
      label: "GitHub",
    },
  ]

  const quickLinks = [
    { label: "Servicios", href: "#services" },
    { label: "Nosotros", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ]

  const services = [
    "Desarrollo Web",
    "Aplicaciones Móviles",
    "Chatbots con IA",
    "Automatizaciones",
  ]

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

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
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white"
              >
                <Zap size={20} />
              </motion.div>
              <span className="font-black text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AlphaSoft
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformando ideas en experiencias digitales extraordinarias con
              código limpio y arquitectura robusta.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} text-white flex items-center justify-center transition-transform shadow-lg`}
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
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className="text-gray-600 dark:text-gray-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} AlphaSoft. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
