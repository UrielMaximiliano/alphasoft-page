import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Bot,
  Zap
} from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/10">
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Desarrollo Personalizado",
      description: "Soluciones de software a medida construidas con tecnologías modernas y mejores prácticas."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Aplicaciones Móviles",
      description: "Aplicaciones móviles nativas y multiplataforma con experiencia de usuario excepcional."
    },
    {
      icon: <Globe size={24} />,
      title: "Aplicaciones Web",
      description: "Aplicaciones web responsivas, rápidas y escalables que impulsan el crecimiento empresarial."
    },
    {
      icon: <Bot size={24} />,
      title: "Chatbots Inteligentes",
      description: "Chatbots con IA que mejoran la atención al cliente y automatizan conversaciones."
    },
    {
      icon: <Zap size={24} />,
      title: "Automatizaciones",
      description: "Automatiza procesos empresariales para aumentar la eficiencia y reducir costos operativos."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones de software integrales diseñadas para elevar tu negocio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;