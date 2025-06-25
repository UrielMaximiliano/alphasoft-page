import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800">
      <div id="about-section" className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Acerca de AlphaSoft
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Somos un equipo de desarrolladores y diseñadores apasionados que creemos en el poder del 
              código limpio y eficiente, y en las experiencias de usuario hermosas.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Fundada sobre los principios de innovación y excelencia, AlphaSoft entrega 
              soluciones de software que no solo satisfacen las necesidades de hoy, sino que anticipan los desafíos del mañana.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Empoderar a las empresas con soluciones de software innovadoras que impulsen el crecimiento, 
                la eficiencia y el éxito en la era digital.
              </p>
            </div>
          </div>

          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
              <div className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  Nuestro Equipo
                </h3>
                
                {/* Círculos para fotos del equipo */}
                <div className="flex justify-center items-center gap-8 mb-6">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-white dark:border-gray-700 shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <span className="text-white font-semibold text-sm">Foto 1</span>
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
                  </div>
                  
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center border-4 border-white dark:border-gray-700 shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <span className="text-white font-semibold text-sm">Foto 2</span>
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4">
                  Haz clic en los círculos para agregar fotos de tu equipo
                </p>
                
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    Un equipo dedicado a crear soluciones excepcionales con pasión por la innovación 
                    y el desarrollo de software de alta calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;