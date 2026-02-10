"use client"

import { useState, useRef } from "react"
import { Send, CheckCircle, Sparkles, Instagram, Mail, MapPin, Clock } from "lucide-react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        USER_ID
      )
      .then(() => {
        setIsSubmitting(false)
        setSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      })
      .catch(() => {
        setIsSubmitting(false)
        setError("Ocurrió un error al enviar el mensaje. Intenta nuevamente.")
      })
  }

  const contactInfo = [
    {
      icon: <Instagram size={24} />,
      label: "Instagram",
      value: "@alphasoft__",
      href: "https://www.instagram.com/alphasoft__/",
      gradient: "from-violet-500 to-violet-600",
      bgGradient: "from-violet-50/50 to-slate-50 dark:from-violet-900/10 dark:to-slate-900/20",
      borderColor: "border-violet-200/50 dark:border-violet-800/30",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "alphasoftwebs@gmail.com",
      href: "mailto:alphasoftwebs@gmail.com",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50/50 to-slate-50 dark:from-blue-900/10 dark:to-slate-900/20",
      borderColor: "border-blue-200/50 dark:border-blue-800/30",
    },
    {
      icon: <MapPin size={24} />,
      label: "Ubicación",
      value: "Remoto / Global",
      href: null,
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50/50 to-slate-50 dark:from-teal-900/10 dark:to-slate-900/20",
      borderColor: "border-teal-200/50 dark:border-teal-800/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold mb-6 shadow-lg"
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
            Convertí tu idea en{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              realidad
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Contanos sobre tu proyecto y recibí una{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              propuesta personalizada en menos de 24 horas
            </span>
            . Sin compromisos, sin letra chica.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
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
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    ¡Gracias!
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Te responderemos dentro de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
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
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn btn-primary flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 justify-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ¿Por qué elegirnos?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Trabajás directamente con los desarrolladores, sin intermediarios. 
                Eso significa comunicación clara, entregas ágiles y un producto final 
                que refleja exactamente lo que necesitás.
              </p>

              {/* Urgency element */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 mb-8">
                <Clock size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                  Cupos limitados por mes para garantizar calidad en cada proyecto.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {info.href ? (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${info.bgGradient} border ${info.borderColor} transition-all duration-300 group`}
                    >
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white`}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {info.label}
                        </p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ) : (
                    <div
                      className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${info.bgGradient} border ${info.borderColor}`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {info.label}
                        </p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
