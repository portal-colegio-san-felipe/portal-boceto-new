import { useState } from 'react';
import { ClipboardList, CreditCard, FileText, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faq = [
  { q: '¿Cuáles son los requisitos para inscribirse?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  { q: '¿Cuál es el costo de matrícula?', a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
  { q: '¿Hay becas disponibles?', a: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { q: '¿Cómo se realizan los pagos?', a: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-900 text-sm">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 bg-white text-sm text-gray-500 leading-relaxed">{a}</div>}
    </div>
  );
}

export default function Inscripciones() {
  const steps = [
    { icon: ClipboardList, title: 'Solicitar Formulario', desc: 'Descarga o recoge el formulario de inscripción en secretaría.', color: 'bg-blue-50 text-blue-700' },
    { icon: FileText, title: 'Entregar Documentos', desc: 'Presenta los documentos requeridos en la secretaría del colegio.', color: 'bg-teal-50 text-teal-700' },
    { icon: CreditCard, title: 'Realizar el Pago', desc: 'Efectúa el pago de inscripción por los medios habilitados.', color: 'bg-amber-50 text-amber-700' },
    { icon: HelpCircle, title: 'Confirmación', desc: 'Recibirás confirmación de admisión por correo electrónico.', color: 'bg-slate-50 text-slate-700' },
  ];

  return (
    <div>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-700/60 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Admisiones
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Inscripciones &amp; Pagos</h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded mt-2" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Proceso de Inscripción</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, title, desc, color }, i) => (
              <div key={title} className="relative flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Medios de Pago</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {['Transferencia Bancaria', 'PSE / En línea', 'Efectivo en Caja'].map((method) => (
              <div key={method} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CreditCard className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900">{method}</h4>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Preguntas Frecuentes</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded mt-3" />
          </div>
          <div className="space-y-3">
            {faq.map((item) => <FaqItem key={item.q} {...item} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
