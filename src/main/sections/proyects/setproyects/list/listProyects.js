/** @module Sections/Proyects */
/**
 * An array with contain info about proyectos for set to display.
 * @const
 * @example
 * import Card from 'components/main/sections/setproyects/list/listProyect'
 * listProyects[0].name
 * // return "Template Next"
 * @returns {Array} An array of objects.
 */
const listProyects = [
  {
    name: 'Template Next',
    url: 'https://github.com/PeterDamianG/template-next',
    desc: 'Una plantilla para nuevos proyectos, utilizando toda la potencia de NextJS.',
    lang: 'JavaScript Next',
    img: '/proyects/TemplateNext.jpg',
  },
  {
    name: 'ONG Team 42 - t42-project Client',
    url: 'https://bitbucket.org/alkemy-dev/t42-project-client/src/master/',
    desc: 'Proyecto colaborativo entre más de 10 personas, conformado por desarrolladores y supervisores. Cliente del proyecto.',
    lang: 'JavaScript React',
    img: '/proyects/ONGClient.jpg',
    isBitbucket: true,
  },
  {
    name: 'ONG Team 42 - t42-project Server',
    url: 'https://bitbucket.org/alkemy-dev/t42-project-server/src/master/',
    desc: 'Proyecto colaborativo entre más de 10 personas, conformado por desarrolladores y supervisores. Servidor del proyecto',
    lang: 'JavaScript NodeJS',
    img: '/proyects/ONGServer.jpg',
    isBitbucket: true,
  },
  {
    name: 'ChallengeJS Alkemy',
    url: 'https://github.com/PeterDamianG/challengejs-alkemy',
    desc: 'Este repositorio, es una posible solución al desafío de javascript propuesto por la aceleradora Alkemy.',
    lang: 'JavaScript React',
    img: '/proyects/AlkemyChallenger.jpg',
  },
  {
    name: 'TemplarKnightsGuild',
    url: 'https://github.com/PeterDamianG/TemplarKnightsGuild',
    desc: 'Este es un sitio web, desarrollado como practica. Es una página de una guild de videojuegos, con contenido minimo sobre el mismo.',
    lang: 'JavaScript Vue',
    img: '/proyects/TemplarKnightGuild.jpg',
  },
  {
    name: 'LoRHelper',
    url: 'https://github.com/PeterDamianG/LoRHelper',
    desc: 'Esta es un prototipo de una APP de escritorio, a modo de tracker para el juego de cartas de Legends of Runeterra.',
    lang: 'C# WPF',
    img: '/proyects/LoRHelper.jpg',
  },
  {
    name: 'ArtifactHelper',
    url: 'https://github.com/PeterDamianG/ArtifactHelper',
    desc: 'Un prototipo para una APP no oficial, a modo de "helper" para el juego de cartas de Artifact Card Game Dota2.',
    lang: 'JavaScript Electron',
    img: '/proyects/ArtifactHelper.jpg',
  },
  {
    name: 'InvertirArgentina',
    url: 'https://github.com/PeterDamianG/InvertirArgentina',
    desc: 'Prototipo de una página web, desarrollada con React y Firebase. Con la tematica de economía y finanzas en argentina.',
    lang: 'JavaScript Firebase',
    img: '/proyects/InvertirArgentina.jpg',
  },
  {
    name: 'Challenge Angular Blog',
    url: 'https://github.com/PeterDamianG/ChallengeAngularBlog',
    desc: 'Desarrollo de un blog en angular.',
    lang: 'TypeScript Angular',
    img: '/proyects/AngularBlogHome.jpg',
  },
  {
    name: 'PeterDamianG Site Web',
    url: 'https://github.com/PeterDamianG/PeterDamianG',
    desc: 'El desarrollo del sitio web personal, donde te encuentras actualmente.',
    lang: 'JavaScript Next',
    img: '/proyects/PersonalWeb.jpg',
  },
];

export default listProyects;
