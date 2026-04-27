import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Inicio', page: 'inicio' },
  { label: 'Mi Colegio', page: 'mi-colegio' },
  { label: 'Galería/Redes', page: 'galeria' },
  { label: 'Inscripciones/Pagos', page: 'inscripciones' },
  { label: 'Académico', page: 'academico' },
  { label: 'Calendario', page: 'calendario' },
  { label: 'Contacto', page: 'contacto' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      <div className="bg-blue-900 text-white text-xs py-1.5 px-4 text-center tracking-wide">
        Bienvenidos al Colegio San Felipe Neri Bogotá &mdash; Formando líderes con valores desde 1962
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNav('inicio')} className="flex items-center group">
            <img
              src="/logo.png"
              alt="Colegio San Felipe Neri Bogotá"
              className="h-14 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`nav-link ${currentPage === page ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}>
        <nav className="bg-white px-4 py-2 flex flex-col gap-1">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                currentPage === page ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
