"use client"

import type React from "react"
import { Zap, Github, Mail, Heart } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
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
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
              Transformando ideas en experiencias digitales extraordinarias con código limpio y arquitectura robusta.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/alphasoft__/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center transition-transform shadow-lg"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:alphasoftwebs@gmail.com"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center transition-transform shadow-lg"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center transition-transform shadow-lg"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Servicios</h3>
            <ul className="space-y-3">
              {["Desarrollo Personalizado", "Aplicaciones Web", "Chatbots Inteligentes", "Automatizaciones"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#services"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </motion.a>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Empresa</h3>
            <ul className="space-y-3">
              {[
                { name: "Nosotros", href: "#about" },
                { name: "Contacto", href: "#contact" },
                { name: "Servicios", href: "#services" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()} AlphaSoft. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
            Hecho con{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart size={14} className="text-red-500" />
            </motion.span>{" "}
            por AlphaSoft
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
