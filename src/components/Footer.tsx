import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                AlphaSoft
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Construimos soluciones de software con código limpio y un enfoque innovador.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Desarrollo Personalizado",
                "Aplicaciones Web",
                "Chatbots Inteligentes",
                "Automatizaciones"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              {[
                "Nosotros",
                "Contacto",
                "Política de Privacidad",
                "Términos de Servicio"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AlphaSoft. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Hecho con ❤️ para la innovación
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;