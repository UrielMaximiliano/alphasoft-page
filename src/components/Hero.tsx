import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
              ✨ Soluciones de Software Innovadoras
            </span>
          </div>

          <h1 
            className={`mt-8 text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            Construye el futuro
            <br />
            <span className="text-blue-600 dark:text-blue-400">con AlphaSoft</span>
          </h1>

          <p 
            className={`mt-8 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            Creamos soluciones de software innovadoras con dedicación y creatividad. 
            Código limpio, diseño hermoso, resultados que superan expectativas.
          </p>

          <div 
            className={`mt-12 flex justify-center ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#contact" className="btn btn-primary group">
              Comenzar
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Minimalist tech indicators */}
          <div 
            className={`mt-20 flex justify-center items-center gap-8 opacity-60 ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            {['React', 'TypeScript', 'Node.js', 'Cloud'].map((tech, index) => (
              <div key={index} className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;