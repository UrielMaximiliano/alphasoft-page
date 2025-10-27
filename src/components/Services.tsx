import React, { useEffect, useState, useRef } from 'react';
import {
  Code2,
  Globe,
  Bot,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, gradient, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? 'fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}></div>

      {/* Icon with gradient background */}
      <div className="relative">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          {icon}
        </div>
        <div className={`absolute top-0 left-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
      </div>

      <h3 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{description}</p>

      {/* Learn more link */}
      <div className="relative flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span>Más información</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Desarrollo Personalizado",
      description: "Soluciones de software a medida construidas con las mejores prácticas y tecnologías modernas.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe size={28} />,
      title: "Aplicaciones Web",
      description: "Aplicaciones web responsivas y escalables que ayudan a impulsar el crecimiento de tu negocio.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Bot size={28} />,
      title: "Chatbots Inteligentes",
      description: "Chatbots con IA que mejoran la atención al cliente y automatizan conversaciones de manera eficiente.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap size={28} />,
      title: "Automatizaciones",
      description: "Automatizamos procesos empresariales para aumentar la eficiencia y optimizar costos operativos.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
            <Zap size={16} />
            Lo que hacemos
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Soluciones de software integrales desarrolladas con dedicación y conocimiento técnico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;