/**
 * Archivo central de datos del sitio.
 * Editar este archivo para actualizar toda la información de la web.
 */

// ─── Información personal ──────────────────────────────────────────────────

export const PERSONAL_INFO = {
  name: 'Peter Damián Gómez',
  displayName: 'Peter DG',
  title: 'Web Developer',
  email: 'PeterDamianG@Gmail.com',
  githubURL: 'https://github.com/PeterDamianG',
  linkedInURL: 'https://www.linkedin.com/in/peterdamiang/',
  telegramURL: 'https://t.me/PeterDamianG',
  whatsAppURL: 'https://bit.ly/3kwROHZ',
  cvURL: '/profile/cv.pdf',
  siteURL: 'https://peterdg.com.ar/',
} as const;

// ─── Proyectos ─────────────────────────────────────────────────────────────

export type Project = {
  readonly name: string;
  readonly URL: string;
  readonly description: string;
  readonly tech: string;
  readonly img: string;
};

export const LIST_PROJECTS: readonly Project[] = [
  {
    name: 'ChallengeJS Alkemy',
    URL: 'https://github.com/PeterDamianG/challengejs-alkemy',
    description:
      'Este repositorio, es una posible solución al desafío de javascript propuesto por la aceleradora Alkemy.',
    tech: 'JavaScript React',
    img: 'proyects/AlkemyChallenger.jpg',
  },
  {
    name: 'ONG Team 42 - t42-project',
    URL: 'https://github.com/PeterDamianG/AlkemyFinalProyect',
    description:
      'Proyecto colaborativo entre más de 10 personas, conformado por desarrolladores y supervisores.',
    tech: 'React Express',
    img: 'proyects/AlkemyFinalProyect.jpg',
  },
  {
    name: 'Challenge Angular Blog',
    URL: 'https://github.com/PeterDamianG/ChallengeAngularBlog',
    description:
      'Desarrollo de un blog en angular. Como desafío propuesto por acelleradora Alkemy.',
    tech: 'TypeScript Angular',
    img: 'proyects/AngularChallengerAlkemy.jpg',
  },
  {
    name: 'TemplarKnightsGuild',
    URL: 'https://github.com/PeterDamianG/TemplarKnightsGuild',
    description:
      'Este es un sitio web, desarrollado como practica. Es una página de una guild de videojuegos, con contenido minimo sobre el mismo.',
    tech: 'JavaScript Vue',
    img: 'proyects/TemplarKnightGuild.jpg',
  },
  {
    name: 'LoRHelper',
    URL: 'https://github.com/PeterDamianG/LoRHelper',
    description:
      'Esta es un prototipo de una APP de escritorio, a modo de tracker para el juego de cartas de Legends of Runeterra.',
    tech: 'C# WPF',
    img: 'proyects/LoRHelper.jpg',
  },
  {
    name: 'ArtifactHelper',
    URL: 'https://github.com/PeterDamianG/ArtifactHelper',
    description:
      'Un prototipo para una APP no oficial, a modo de "helper" para el juego de cartas de Artifact Card Game Dota2.',
    tech: 'JavaScript Electron',
    img: 'proyects/ArtifactHelper.jpg',
  },
  {
    name: 'InvertirArgentina',
    URL: 'https://github.com/PeterDamianG/InvertirArgentina',
    description:
      'Prototipo de una página web, desarrollada con React y Firebase. Con la tematica de economía y finanzas en argentina.',
    tech: 'JavaScript Firebase',
    img: 'proyects/InvertirArgentina.jpg',
  },
] as const;

// ─── Textos del drawer ─────────────────────────────────────────────────────

export const DRAWER_TEXT = [
  'También puedes cambiar a otras resoluciones.',
  'Mis conocimientos son preferentemente sobre la web.',
  'También soy un fanático de los videojuegos, ¡Búscame en Steam!',
  'He trabajado con más de diez personas en equipo.',
  'Las tecnologías son sólo herramientas, depende del desarrollador lo demás.',
  'La web es principalmente JavaScript, pero esto está hecho en TypeScript.',
  'El equilibrio entre simple y cargado, no soy diseñador.',
  'Las cryptomonedas, son el futuro que llego hace rato.',
  '¡Haz llegado hasta aquí! Gracias por tu tiempo.',
] as const;

// ─── Certificaciones ───────────────────────────────────────────────────────

export type Certification = {
  readonly name: string;
  readonly issuer: string;
  readonly url?: string;
};

export const CERTIFICATIONS: readonly Certification[] = [
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
  },
  {
    name: 'Aceleración FullStack en React y Node',
    issuer: 'Alkemy',
  },
  {
    name: 'Google Activate — Comercio Electrónico',
    issuer: 'Google',
  },
  {
    name: 'Google Activate — Análisis de Datos',
    issuer: 'Google',
  },
  {
    name: 'Google Activate — Transformación Digital',
    issuer: 'Google',
  },
  {
    name: 'EF SET English Certificate',
    issuer: 'EF Standard English Test',
  },
] as const;
