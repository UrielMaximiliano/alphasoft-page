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


  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6">
            <Mail size={16} />
            Contáctanos
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            ¿Listo para transformar tus ideas en realidad? Estamos aquí para ayudarte a crear soluciones innovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative group">
            {/* Gradient background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700">
            {submitted ? (
              <div className="text-center py-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <CheckCircle size={40} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">¡Mensaje Enviado!</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Te responderemos dentro de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
            </div>
          </div>

          {/* Contact info cards */}
          <div className="flex flex-col gap-8 justify-center">
            <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Ponte en Contacto</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Ya seas una startup buscando construir tu primer producto o una empresa que busca modernizar sus sistemas, estamos aquí para aplicar nuestros conocimientos y ayudarte a tener éxito.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://www.instagram.com/alphasoft__/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 border border-pink-200 dark:border-pink-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaInstagram size={26} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Instagram</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">@alphasoft__</div>
                </div>
              </a>

              <a
                href="mailto:alphasoftwebs@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MdEmail size={28} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Email</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">alphasoftwebs@gmail.com</div>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border border-green-200 dark:border-green-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <GoLocation size={28} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Ubicación</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">Corrientes Capital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;