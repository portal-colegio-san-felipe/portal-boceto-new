import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Globe, Calendar, BookMarked, ArrowRight, X } from 'lucide-react';
import { newsItems } from '../data';
import { NewsItem, Page } from '../types';

interface InicioProps {
  onNavigate: (page: Page) => void;
}

const quickLinks = [
  { icon: BookOpen, label: 'SysColegios', sublabel: 'Académico', color: 'from-blue-600 to-blue-700', page: 'academico' as Page },
  { icon: Globe, label: 'Plataforma', sublabel: 'Richmond', color: 'from-teal-600 to-teal-700', page: 'academico' as Page },
  { icon: Calendar, label: 'Calendario', sublabel: 'Escolar', color: 'from-amber-500 to-amber-600', page: 'calendario' as Page },
  { icon: BookMarked, label: 'Manual de', sublabel: 'Convivencia', color: 'from-slate-600 to-slate-700', page: 'inicio' as Page },
];

export default function Inicio({ onNavigate }: InicioProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    setCurrentSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[520px] overflow-hidden bg-gray-900">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-3xl">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                {item.category}
              </span>
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-200 text-sm sm:text-base line-clamp-2">{item.preview}</p>
            </div>
          </div>
        ))}

        <button
          onClick={() => goTo((currentSlide - 1 + newsItems.length) % newsItems.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goTo((currentSlide + 1) % newsItems.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 right-8 flex gap-2">
          {newsItems.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-white border-b border-gray-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map(({ icon: Icon, label, sublabel, color, page }) => (
              <button
                key={label}
                onClick={() => { onNavigate(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`bg-gradient-to-br ${color} text-white rounded-xl p-4 flex items-center gap-3 group hover:shadow-lg active:scale-95 transition-all duration-200`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium text-white/80 leading-tight">{label}</div>
                  <div className="text-sm font-bold leading-tight">{sublabel}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Noticias Recientes</h2>
            <div className="w-12 h-1 bg-blue-600 mt-3 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.preview}</p>
                  <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium">
                    Leer más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-56 object-cover rounded-t-2xl" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {selectedArticle.category}
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-2">{selectedArticle.date}</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h2>
              <p className="text-gray-600 leading-relaxed">{selectedArticle.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
