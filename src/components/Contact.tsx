"use client"

import type React from "react"
import { useState, useEffect, useRef, memo } from "react"
import { Send, CheckCircle, Sparkles, Instagram, Mail, MapPin } from "lucide-react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { MagneticButton } from "./MagneticButton"

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const SERVICE_ID = "service_x376u74"
    const TEMPLATE_ID = "template_wliji8o"
    const USER_ID = "ikCCwHpc74TUb7fYy"

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          title: formState.message,
        },
        USER_ID,
      )
      .then(() => {
        setIsSubmitting(false)
        setSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      })
      .catch(() => {
<<<<<<< HEAD
        setIsSubmitting(false)
        setError("Ocurrió un error al enviar el mensaje. Intenta nuevamente.")
      })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold mb-6 shadow-lg"
          >
            <Sparkles size={18} />
            <span>Contáctanos</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6"
          >
            Trabajemos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Juntos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            ¿Listo para transformar tus ideas en realidad? Estamos aquí para ayudarte a crear{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">soluciones innovadoras</span> que impulsen
            tu negocio.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">¡Gracias!</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Te responderemos dentro de 24 horas.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary flex items-center justify-center gap-2 text-lg py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send size={18} />
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ponte en Contacto</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Ya seas una startup buscando construir tu primer producto o una empresa que busca modernizar sus
                sistemas, estamos aquí para aplicar nuestros conocimientos y ayudarte a tener éxito.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                href="https://www.instagram.com/alphasoft__/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border border-pink-200 dark:border-pink-800 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white will-change-transform"
                >
                  <Instagram size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Instagram</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">@alphasoft__</p>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                href="mailto:alphasoftwebs@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white will-change-transform"
                >
                  <Mail size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">alphasoftwebs@gmail.com</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Ubicación</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Corrientes Capital</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
=======
        setIsSubmitting(false);
        setError('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
      });
  };


  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
            <Mail size={16} />
            Contáctanos
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            ¿Listo para transformar tus ideas en realidad? Estamos aquí para ayudarte a crear soluciones innovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative group">
            {/* Gradient background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700">
            {submitted ? (
              <div className="text-center py-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <CheckCircle size={40} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">¡Mensaje Enviado!</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Te responderemos dentro de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
            </div>
          </div>

          {/* Contact info cards */}
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Ponte en Contacto</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Ya seas una startup buscando construir tu primer producto o una empresa que busca modernizar sus sistemas, estamos aquí para aplicar nuestros conocimientos y ayudarte a tener éxito.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.instagram.com/alphasoft__/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 border border-pink-200 dark:border-pink-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaInstagram size={26} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Instagram</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">@alphasoft__</div>
                </div>
              </a>

              <a
                href="mailto:alphasoftwebs@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MdEmail size={28} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Email</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">alphasoftwebs@gmail.com</div>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <GoLocation size={28} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Ubicación</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">Corrientes Capital</div>
                </div>
              </div>
            </div>
          </div>
>>>>>>> 3035ea6b2dfdb5997717f89439d9803707140dab
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)
