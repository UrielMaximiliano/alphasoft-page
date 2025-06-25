import React, { useEffect, useState } from 'react';
import fotoNico from '../assets/foto-nico.jpg';
import fotoUriel from '../assets/foto-uriel.jpg';

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
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Fundada sobre los principios de innovación, aprendizaje continuo y excelencia, AlphaSoft 
              entrega soluciones que no solo satisfacen las necesidades actuales, sino que demuestran 
              nuestro compromiso con el crecimiento y la mejora constante.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Aplicar nuestros conocimientos y pasión por la tecnología para crear soluciones de software 
                innovadoras que ayuden a las empresas a crecer y tener éxito en la era digital.
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
                
                {/* Fotos del equipo */}
                <div className="flex justify-center items-center gap-8 mb-6">
                  <div className="relative group text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg cursor-pointer hover:scale-105 transition-transform mx-auto mb-2">
                      <img 
                        src={fotoNico} 
                        alt="Nico - Estudiante de Ingeniería en Sistemas" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Nico</h4>
                  </div>
                  
                  <div className="relative group text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg cursor-pointer hover:scale-105 transition-transform mx-auto mb-2">
                      <img 
                        src={fotoUriel} 
                        alt="Uriel - Estudiante de Ingeniería en Sistemas" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Uriel</h4>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Somos estudiantes apasionados de Ingeniería en Sistemas, comprometidos con la excelencia 
                    y la innovación en el desarrollo de software.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Aunque estamos en formación, nuestra dedicación, creatividad y ganas de aprender 
                    nos permiten entregar soluciones de calidad que superan las expectativas.
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