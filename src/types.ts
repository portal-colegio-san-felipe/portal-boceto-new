export type Page = 'inicio' | 'mi-colegio' | 'galeria' | 'inscripciones' | 'academico' | 'calendario' | 'contacto';

export interface NewsItem {
  id: number;
  title: string;
  preview: string;
  image: string;
  date: string;
  content: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  department: 'directivas' | 'profesores' | 'secretaria' | 'otros';
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  event: string;
  date: string;
}
