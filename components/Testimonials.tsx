"use client"

import { ExternalLink, ShoppingCart, Activity, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    name: "La Rocka Shop",
    category: "E-commerce",
    url: "https://www.larocka.shop/",
    description:
      "Tienda online completa de tecnología y electrodomésticos con catálogo de +50 productos, filtros avanzados, carrito de compras, integración con múltiples medios de pago y diseño 100% responsive.",
    features: ["Catálogo con filtros dinámicos", "Carrito y checkout", "Integración tarjetas y WhatsApp", "Panel de administración"],
    icon: <ShoppingCart size={28} />,
    gradient: "from-blue-500 to-teal-500",
    bgGradient: "from-blue-500/10 to-teal-500/10",
    location: "La Leonesa, Chaco",
  },
  {
    name: "Atlas Kinesiología",
    category: "Sistema de Gestión",
    url: "https://www.atlaskinesiologia.com/",
    description:
      "Plataforma web profesional para un centro de salud multidisciplinario. Gestión de consultas de kinesiología, psicología, nutrición y tratamientos especializados con recursos educativos integrados.",
    features: ["Multi-especialidad (5 áreas)", "Gestión de consultas", "Recursos educativos", "Diseño profesional de salud"],
    icon: <Activity size={28} />,
    gradient: "from-violet-500 to-blue-500",
    bgGradient: "from-violet-500/10 to-blue-500/10",
    location: "Resistencia, Chaco",
  },
]

export default function Testimonials() {
  return (
    <section id="portfolio" className="py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora-bg opacity-30" />

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
            <ExternalLink size={18} className="text-blue-500" />
            <span>Portfolio</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Proyectos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              en producción
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Software real, funcionando y generando resultados para nuestros clientes.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, rotateX: -3, rotateY: 2 }}
              style={{ transformPerspective: 800 }}
              className="group relative block rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-500 group-hover:bg-clip-text transition-all duration-300">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r ${project.bgGradient} text-gray-700 dark:text-gray-300`}>
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-[15px]">
                  {project.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Visit link */}
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Visitar sitio
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-gray-500 dark:text-gray-400"
        >
          ¿Querés que tu proyecto sea el próximo?{" "}
          <a href="#contact" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">
            Hablemos →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
