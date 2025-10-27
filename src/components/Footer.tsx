import React from 'react';
import { Github, Mail, Sparkles, ArrowUp } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                <img
                  src={logo}
                  alt="AlphaSoft Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-3xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                AlphaSoft
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
              Creamos soluciones de software innovadoras con dedicación y creatividad. Código limpio, arquitectura robusta y resultados excepcionales.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/alphasoft__/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="mailto:alphasoftwebs@gmail.com"
                className="group p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 text-white hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Servicios</h3>
            <ul className="space-y-3">
              {[
                "Desarrollo Personalizado",
                "Aplicaciones Web",
                "Chatbots Inteligentes",
                "Automatizaciones"
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-blue-600 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Empresa</h3>
            <ul className="space-y-3">
              {[
                { label: "Nosotros", href: "#about" },
                { label: "Contacto", href: "#contact" },
                { label: "Política de Privacidad", href: "#" },
                { label: "Términos de Servicio", href: "#" }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-blue-600 transition-colors"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AlphaSoft. Todos los derechos reservados. Hecho con dedicación en Corrientes.
          </p>
          <button
            onClick={scrollToTop}
            className="group p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;