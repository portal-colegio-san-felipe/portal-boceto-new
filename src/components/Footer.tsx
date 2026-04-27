import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';
import { Page } from '../types';

const footerPages: { page: Page; label: string }[] = [
  { page: 'inicio', label: 'Inicio' },
  { page: 'mi-colegio', label: 'Mi Colegio' },
  { page: 'galeria', label: 'Galería / Redes' },
  { page: 'inscripciones', label: 'Inscripciones / Pagos' },
  { page: 'academico', label: 'Académico' },
  { page: 'calendario', label: 'Calendario' },
  { page: 'contacto', label: 'Contacto' },
];

export default function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const nav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Colegio San Felipe Neri
                </div>
                <div className="text-xs text-blue-300 tracking-widest uppercase">Bogotá</div>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Formando ciudadanos íntegros, líderes y comprometidos con Colombia desde 1962.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {footerPages.map(({ page, label }) => (
                <li key={page}>
                  <button onClick={() => nav(page)} className="hover:text-white transition-colors duration-150">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                Calle 123 # 45-67, Bogotá, Colombia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                +57 (1) 234 5678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                info@sanfelipeneri.edu.co
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 text-center text-xs text-blue-400">
          &copy; {new Date().getFullYear()} Colegio San Felipe Neri Bogotá. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
