import { Calendar } from 'lucide-react';

export default function Calendario() {
  return (
    <div>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-700/60 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Año Escolar 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Calendario Escolar</h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded" />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-12 border border-gray-100">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Próximamente</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto">
              El calendario escolar oficial para el año 2026 estará disponible en esta sección. Aquí podrás consultar fechas de períodos académicos, vacaciones, eventos institucionales y más.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Período 1', 'Período 2', 'Período 3', 'Período 4'].map((p, i) => (
                <div key={p} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-700 font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-700">{p}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Por definir</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
