import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Interactive cursor glow */}
      <div
        className="absolute w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Badge with icon */}
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
              <Sparkles size={16} className="animate-pulse" />
              Soluciones de Software Innovadoras
            </div>
          </div>

          {/* Main heading with gradient */}
          <h1
            className={`mt-12 text-6xl md:text-8xl font-black tracking-tight text-gray-900 dark:text-white ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            Construye el futuro
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent animate-gradient">
              con AlphaSoft
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mt-10 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            Creamos soluciones de software innovadoras con dedicación y creatividad.
            <br className="hidden md:block" />
            Código limpio, arquitectura robusta y resultados que superan expectativas.
          </p>

          {/* CTA buttons */}
          <div
            className={`mt-14 flex flex-col sm:flex-row justify-center gap-4 ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2">
              <span>Comenzar Proyecto</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Comenzar Proyecto</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg">
              Ver Servicios
            </a>
          </div>

          {/* Stats section */}
          <div
            className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { icon: <Code size={24} />, label: 'React', color: 'from-blue-500 to-cyan-500' },
              { icon: <Zap size={24} />, label: 'TypeScript', color: 'from-blue-600 to-blue-700' },
              { icon: <Code size={24} />, label: 'Node.js', color: 'from-green-500 to-emerald-600' },
              { icon: <Sparkles size={24} />, label: 'Cloud', color: 'from-cyan-500 to-blue-600' }
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <div className="text-sm font-bold text-gray-700 dark:text-gray-300">{tech.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;