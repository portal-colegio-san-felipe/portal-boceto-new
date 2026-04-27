import { NewsItem, TeamMember, GalleryImage } from './types';

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Día de la Ciencia y la Tecnología 2026',
    preview: 'Nuestros estudiantes presentaron proyectos innovadores en la feria anual de ciencias, demostrando talento y creatividad excepcionales.',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=900',
    date: '15 de abril, 2026',
    category: 'Eventos',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
  },
  {
    id: 2,
    title: 'Graduación Promoción 2025',
    preview: 'Con gran orgullo celebramos la graduación de nuestra nueva promoción, quienes se llevan los valores de San Felipe Neri al mundo.',
    image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=900',
    date: '10 de abril, 2026',
    category: 'Ceremonias',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    title: 'Torneo Intercolegiado de Fútbol',
    preview: 'El equipo de fútbol clasificó a la semifinal del torneo intercolegiado zonal, representando con honor a nuestra institución.',
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=900',
    date: '5 de abril, 2026',
    category: 'Deportes',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Semana Cultural: Arte y Patrimonio',
    preview: 'Durante la semana cultural, los estudiantes exploraron el patrimonio artístico colombiano a través de talleres y exposiciones.',
    image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=900',
    date: '28 de marzo, 2026',
    category: 'Cultura',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    title: 'Nuevas Becas de Excelencia Académica',
    preview: 'La institución anuncia convocatoria para becas de excelencia académica dirigidas a estudiantes con alto rendimiento.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900',
    date: '20 de marzo, 2026',
    category: 'Académico',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const teamMembers: TeamMember[] = [
  { id: 1, name: 'Carlos Ramírez', role: 'Rector', description: 'Licenciado en Ciencias de la Educación con 20 años de experiencia directiva.', department: 'directivas' },
  { id: 2, name: 'Ana María Torres', role: 'Vicerrectora Académica', description: 'Magíster en Pedagogía y especialista en currículum educativo.', department: 'directivas' },
  { id: 3, name: 'Jorge Patiño', role: 'Coordinador de Disciplina', description: 'Psicólogo educativo con enfoque en convivencia escolar.', department: 'directivas' },
  { id: 4, name: 'María Fernanda López', role: 'Docente de Matemáticas', description: 'Ingeniera y licenciada con 12 años de docencia en bachillerato.', department: 'profesores' },
  { id: 5, name: 'Diego Herrera', role: 'Docente de Ciencias Naturales', description: 'Biólogo con maestría en educación ambiental.', department: 'profesores' },
  { id: 6, name: 'Sandra Gómez', role: 'Docente de Español y Literatura', description: 'Filóloga con pasión por la literatura latinoamericana.', department: 'profesores' },
  { id: 7, name: 'Felipe Castro', role: 'Docente de Historia', description: 'Historiador y pedagogo, apasionado por la memoria colectiva.', department: 'profesores' },
  { id: 8, name: 'Lucía Vargas', role: 'Docente de Inglés', description: 'Bilingüe certificada CELTA con experiencia internacional.', department: 'profesores' },
  { id: 9, name: 'Patricia Rojas', role: 'Secretaria General', description: 'Administradora con 15 años en gestión institucional.', department: 'secretaria' },
  { id: 10, name: 'Andrés Molina', role: 'Auxiliar Administrativo', description: 'Técnico en administración de archivos y documentación.', department: 'secretaria' },
  { id: 11, name: 'Gloria Mendoza', role: 'Orientadora Escolar', description: 'Psicóloga clínica especializada en adolescencia y familia.', department: 'otros' },
  { id: 12, name: 'Tomás Cardona', role: 'Coordinador de Sistemas', description: 'Ingeniero de sistemas responsable de la infraestructura TI.', department: 'otros' },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Graduación', event: 'Graduación 2025', date: '2025-11' },
  { id: 2, src: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Feria de ciencias', event: 'Feria de Ciencias', date: '2025-10' },
  { id: 3, src: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Fútbol', event: 'Torneo Deportivo', date: '2025-09' },
  { id: 4, src: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Semana cultural', event: 'Semana Cultural', date: '2025-08' },
  { id: 5, src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Premios académicos', event: 'Premios Académicos', date: '2025-07' },
  { id: 6, src: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Día del maestro', event: 'Día del Maestro', date: '2025-05' },
  { id: 7, src: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Clase de arte', event: 'Semana Cultural', date: '2025-08' },
  { id: 8, src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Estudiantes', event: 'Feria de Ciencias', date: '2025-10' },
  { id: 9, src: 'https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Instalaciones', event: 'Tour del Colegio', date: '2025-03' },
];
