import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contacto() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-700/60 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Estamos aquí para ti
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Contacto</h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded" />
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: MapPin, label: 'Dirección', value: 'Calle 123 # 45-67\nBogotá, Colombia', color: 'bg-blue-50 text-blue-700' },
              { icon: Phone, label: 'Teléfono', value: '+57 (1) 234 5678\nLun–Vie: 7 am – 5 pm', color: 'bg-teal-50 text-teal-700' },
              { icon: Mail, label: 'Correo', value: 'info@sanfelipeneri.edu.co\nrectoria@sanfelipeneri.edu.co', color: 'bg-amber-50 text-amber-700' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ubicación</h2>
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-80 flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0">
                  <iframe
                    title="Ubicación Colegio San Felipe Neri"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127437.86698937157!2d-74.1472338!3d4.6482837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C+Colombia!5e0!3m2!1ses!2sco!4v1615000000000!5m2!1ses!2sco"
                    className="w-full h-full border-0 rounded-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Envíanos un Mensaje</h2>
              {sent ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-80">
                  <CheckCircle className="w-14 h-14 text-teal-500 mb-4" />
                  <h3 className="text-xl font-bold text-teal-800 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-teal-600 text-sm">Te responderemos a la brevedad posible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Nombre</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Tu nombre"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Correo</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@correo.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Asunto</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Motivo del contacto"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
