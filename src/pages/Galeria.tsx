import { useState } from 'react';
import { Youtube, Instagram, Facebook, Twitter, X } from 'lucide-react';
import { galleryImages } from '../data';
import { GalleryImage } from '../types';

const allEvents = ['Todos', ...Array.from(new Set(galleryImages.map((g) => g.event)))];

export default function Galeria() {
  const [filterEvent, setFilterEvent] = useState('Todos');
  const [sortAsc, setSortAsc] = useState(false);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = galleryImages
    .filter((img) => filterEvent === 'Todos' || img.event === filterEvent)
    .sort((a, b) => sortAsc ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Instagram, label: 'Instagram', color: 'bg-pink-500 hover:bg-pink-600' },
    { icon: Twitter, label: 'Twitter / X', color: 'bg-gray-800 hover:bg-gray-900' },
    { icon: Youtube, label: 'YouTube', color: 'bg-red-600 hover:bg-red-700' },
  ];

  return (
    <div>
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-700/60 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Galería &amp; Redes
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Galería de Eventos</h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded" />
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 py-4 shadow-sm sticky top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3 items-center">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Evento:</span>
          <div className="flex gap-1.5 flex-wrap">
            {allEvents.map((ev) => (
              <button
                key={ev}
                onClick={() => setFilterEvent(ev)}
                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-150 ${
                  filterEvent === ev ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {ev}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Orden:</span>
            <select
              value={sortAsc ? 'asc' : 'desc'}
              onChange={(e) => setSortAsc(e.target.value === 'asc')}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:border-blue-400"
            >
              <option value="desc">Más reciente</option>
              <option value="asc">Más antiguo</option>
            </select>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">No hay imágenes para este filtro.</div>
          ) : (
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
              {filtered.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setLightbox(img)}
                  className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-2 py-1 rounded-full">
                      {img.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Social + YouTube */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Síguenos en Redes</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded mb-8" />
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {socialLinks.map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                className={`${color} text-white flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all duration-200`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video flex items-center justify-center shadow-xl">
            <div className="text-center text-white">
              <Youtube className="w-16 h-16 text-red-500 mx-auto mb-3" />
              <p className="text-lg font-semibold">Canal de YouTube</p>
              <p className="text-sm text-gray-400 mt-1">Próximamente &middot; Colegio San Felipe Neri</p>
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full rounded-xl shadow-2xl" />
            <div className="text-white text-center mt-4">
              <p className="font-semibold text-lg">{lightbox.event}</p>
              <p className="text-sm text-gray-400">{lightbox.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
