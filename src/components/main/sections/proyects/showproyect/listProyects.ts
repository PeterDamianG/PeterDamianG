/**
 * An array with contain info about proyectos for set to display.
 * @const
 * @example
 * import Card from 'main/sections/showproyect/listProyect'
 * listProyects[0].name
 */
const listProyects = [
  {
    name: 'ChallengeJS Alkemy',
    URL: 'https://github.com/PeterDamianG/challengejs-alkemy',
    description:
      'Este repositorio, es una posible solución al desafío de javascript propuesto por la aceleradora Alkemy.',
    tech: 'JavaScript React',
    img: '/proyects/AlkemyChallenger.jpg',
  },
  {
    name: 'Challenge Angular Blog',
    URL: 'https://github.com/PeterDamianG/ChallengeAngularBlog',
    description: 'Desarrollo de un blog en angular.',
    tech: 'TypeScript Angular',
    img: '/proyects/AngularBlogHome.jpg',
  },
  {
    name: 'TemplarKnightsGuild',
    URL: 'https://github.com/PeterDamianG/TemplarKnightsGuild',
    description:
      'Este es un sitio web, desarrollado como practica. Es una página de una guild de videojuegos, con contenido minimo sobre el mismo.',
    tech: 'JavaScript Vue',
    img: '/proyects/TemplarKnightGuild.jpg',
  },
  {
    name: 'LoRHelper',
    URL: 'https://github.com/PeterDamianG/LoRHelper',
    description:
      'Esta es un prototipo de una APP de escritorio, a modo de tracker para el juego de cartas de Legends of Runeterra.',
    tech: 'C# WPF',
    img: '/proyects/LoRHelper.jpg',
  },
  {
    name: 'ArtifactHelper',
    URL: 'https://github.com/PeterDamianG/ArtifactHelper',
    description:
      'Un prototipo para una APP no oficial, a modo de "helper" para el juego de cartas de Artifact Card Game Dota2.',
    tech: 'JavaScript Electron',
    img: '/proyects/ArtifactHelper.jpg',
  },
  {
    name: 'ONG Team 42 - t42-project Client',
    URL: 'https://bitbucket.org/alkemy-dev/t42-project-client/src/master/',
    description:
      'Proyecto colaborativo entre más de 10 personas, conformado por desarrolladores y supervisores. Cliente del proyecto.',
    tech: 'JavaScript React',
    img: '/proyects/ONGClient.jpg',
  },
  {
    name: 'ONG Team 42 - t42-project Server',
    URL: 'https://bitbucket.org/alkemy-dev/t42-project-server/src/master/',
    description:
      'Proyecto colaborativo entre más de 10 personas, conformado por desarrolladores y supervisores. Servidor del proyecto',
    tech: 'JavaScript NodeJS',
    img: '/proyects/ONGServer.jpg',
  },
  {
    name: 'Template Next',
    URL: 'https://github.com/PeterDamianG/template-next',
    description:
      'Una plantilla para nuevos proyectos, utilizando toda la potencia de NextJS.',
    tech: 'JavaScript Next',
    img: '/proyects/TemplateNext.jpg',
  },
  {
    name: 'InvertirArgentina',
    URL: 'https://github.com/PeterDamianG/InvertirArgentina',
    description:
      'Prototipo de una página web, desarrollada con React y Firebase. Con la tematica de economía y finanzas en argentina.',
    tech: 'JavaScript Firebase',
    img: '/proyects/InvertirArgentina.jpg',
  },
  {
    name: 'PeterDamianG Site Web',
    URL: 'https://github.com/PeterDamianG/PeterDamianG',
    description:
      'El desarrollo del sitio web personal, donde te encuentras actualmente.',
    tech: 'JavaScript Next',
    img: '/proyects/PersonalWeb.jpg',
  },
] as const;

export default listProyects;
