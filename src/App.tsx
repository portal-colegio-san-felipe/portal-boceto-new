import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import MiColegio from './pages/MiColegio';
import Galeria from './pages/Galeria';
import Inscripciones from './pages/Inscripciones';
import Academico from './pages/Academico';
import Calendario from './pages/Calendario';
import Contacto from './pages/Contacto';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio': return <Inicio onNavigate={setCurrentPage} />;
      case 'mi-colegio': return <MiColegio />;
      case 'galeria': return <Galeria />;
      case 'inscripciones': return <Inscripciones />;
      case 'academico': return <Academico />;
      case 'calendario': return <Calendario />;
      case 'contacto': return <Contacto />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
