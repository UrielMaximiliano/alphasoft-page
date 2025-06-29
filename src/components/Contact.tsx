import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Reemplaza estos valores con los tuyos de EmailJS
    const SERVICE_ID = 'service_x376u74';
    const TEMPLATE_ID = 'template_wliji8o';
    const USER_ID = 'ikCCwHpc74TUb7fYy';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: formState.name,
      email: formState.email,
      title: formState.message,
    }, USER_ID)
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setError('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "alphasoftwebs@gmail.com"
    },
    {
      icon: <MapPin size={20} />,
      title: "Ubicación",
      content: "Corrientes Capital"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Listo para transformar tus ideas en realidad? Estamos aquí para ayudarte a crear soluciones innovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Gracias!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Te responderemos dentro de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contacto lateral tipo lista con título y texto */}
          <div className="flex flex-col gap-6 justify-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ponte en Contacto</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Ya seas una startup buscando construir tu primer producto o una empresa que busca modernizar sus sistemas, estamos aquí para aplicar nuestros conocimientos y ayudarte a tener éxito.
            </p>
            <div className="flex items-center gap-3">
              <FaInstagram size={24} className="text-pink-500" />
              <a href="https://www.instagram.com/alphasoft__/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">@alphasoft__</a>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail size={24} className="text-blue-600" />
              <a href="mailto:alphasoftwebs@gmail.com" className="text-blue-600 hover:underline font-medium">alphasoftwebs@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <GoLocation size={24} className="text-green-600" />
              <span className="text-blue-600 font-medium">Corrientes Capital</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;