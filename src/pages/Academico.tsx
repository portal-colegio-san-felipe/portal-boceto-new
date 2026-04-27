import { Monitor, ExternalLink } from 'lucide-react';

export default function Academico() {
  return (
    <div className="flex flex-col" style={{ minHeight: 'calc(100vh - 124px)' }}>
      <div className="bg-blue-900 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Portal Académico</h1>
            <p className="text-blue-300 text-sm mt-1">Sistema SysColegios integrado</p>
          </div>
          <a
            href="https://www.syscolegios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-blue-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200 shadow"
          >
            <ExternalLink className="w-4 h-4" />
            Abrir en nueva pestaña
          </a>
        </div>
      </div>

      <div className="flex-1 relative bg-gray-100" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <iframe
          src="https://www.syscolegios.com"
          title="SysColegios - Portal Académico"
          className="w-full h-full border-0"
          style={{ minHeight: 'calc(100vh - 200px)' }}
        />

        {/* Fallback shown via absolute positioning if iframe blocked */}
        <noscript>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="text-center p-8 max-w-md">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Monitor className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Portal Académico</h2>
              <p className="text-gray-500 mb-6 text-sm">Activa JavaScript para acceder al portal académico.</p>
              <a
                href="https://www.syscolegios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                Ir a SysColegios
              </a>
            </div>
          </div>
        </noscript>
      </div>
    </div>
  );
}
