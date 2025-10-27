import React, { useEffect, useState } from 'react';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
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

  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: "Innovación",
      description: "Aplicamos tecnologías modernas para crear soluciones únicas"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Crecimiento",
      description: "Aprendizaje continuo y mejora constante en cada proyecto"
    },
    {
      icon: <Target size={24} />,
      title: "Excelencia",
      description: "Compromiso con la calidad y resultados que superan expectativas"
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div id="about-section" className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
            <Users size={16} />
            Quiénes somos
          </div>
          <h2 className={`text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            Acerca de AlphaSoft
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Fundada sobre los principios de innovación, aprendizaje continuo y excelencia
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Team */}
          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-10 blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-2xl overflow-hidden p-10 border border-gray-200 dark:border-gray-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center relative">
                  Nuestro Equipo
                </h3>

                {/* Team photos */}
                <div className="flex justify-center items-center gap-8 mb-8">
                  <div className="group relative text-center">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl cursor-pointer group-hover:scale-110 transition-all duration-500 mx-auto mb-3">
                        <img
                          src={fotoNico}
                          alt="Nico - Estudiante de Ingeniería en Sistemas"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Nico</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Co-fundador</p>
                  </div>

                  <div className="group relative text-center">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl cursor-pointer group-hover:scale-110 transition-all duration-500 mx-auto mb-3">
                        <img
                          src={fotoUriel}
                          alt="Uriel - Estudiante de Ingeniería en Sistemas"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Uriel</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Co-fundador</p>
                  </div>
                </div>

                <div className="relative text-center space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Somos estudiantes apasionados de Ingeniería en Sistemas, comprometidos con la excelencia
                    y la innovación en el desarrollo de software.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aunque estamos en formación, nuestra dedicación, creatividad y ganas de aprender
                    nos permiten entregar soluciones de calidad que superan las expectativas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Mission */}
          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-10 border border-blue-200 dark:border-blue-800">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-10"></div>
                <Target size={32} className="text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Aplicar nuestros conocimientos y pasión por la tecnología para crear soluciones de software
                  innovadoras que ayuden a las empresas a crecer y tener éxito en la era digital.
                </p>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                AlphaSoft entrega soluciones que no solo satisfacen las necesidades actuales, sino que demuestran
                nuestro compromiso con el crecimiento y la mejora constante.
              </p>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;