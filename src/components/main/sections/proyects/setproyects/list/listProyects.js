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
    img: 'https://nextjs.org/_next/image?url=%2Fstatic%2Fimages%2Flearn.png&w=1080&q=75',
  },
  {
    name: 'Template Snowpack + React',
    url: 'https://github.com/PeterDamianG/template-snowpack-react',
    desc: 'Una plantilla para nuevos proyectos, utilizando toda la potencia de Snowpack más React.',
    lang: 'TypeScript React',
    img: 'https://raw.githubusercontent.com/PeterDamianG/template-snowpack-react/main/logoreadme.jpg',
  },
  {
    name: 'ChallengeJS Alkemy',
    url: 'https://github.com/PeterDamianG/challengejs-alkemy',
    desc: 'Este repositorio, es una posible solución al desafío de javascript propuesto por la aceleradora Alkemy.',
    lang: 'JavaScript React',
    img: 'https://github.com/PeterDamianG/challengejs-alkemy/raw/main/img/login.jpg',
  },
  {
    name: 'TemplarKnightsGuild',
    url: 'https://github.com/PeterDamianG/TemplarKnightsGuild',
    desc: 'Este es un sitio web, desarrollado como practica. Es una página de una guild de videojuegos, con contenido minimo sobre el mismo.',
    lang: 'JavaScript Vue',
    img: 'https://github.com/PeterDamianG/TemplarKnightsGuild/raw/master/img/screenshotpageweb/ScreenshotTKG.png',
  },
  {
    name: 'LoRHelper',
    url: 'https://github.com/PeterDamianG/LoRHelper',
    desc: 'Esta es un prototipo de una APP de escritorio, a modo de tracker para el juego de cartas de Legends of Runeterra.',
    lang: 'C# WPF',
    img: 'https://github.com/PeterDamianG/LoRHelper/raw/master/Desktop/Resources/LoRHelperLogo.png',
  },
  {
    name: 'ArtifactHelper',
    url: 'https://github.com/PeterDamianG/ArtifactHelper',
    desc: 'Un prototipo para una APP no oficial, a modo de "helper" para el juego de cartas de Artifact Card Game Dota2.',
    lang: 'JavaScript Electron',
    img: 'https://github.com/PeterDamianG/ArtifactHelper/raw/master/previewimages/previewmainpanel.jpg',
  },
  {
    name: 'InvertirArgentina',
    url: 'https://github.com/PeterDamianG/InvertirArgentina',
    desc: 'Prototipo de una página web, desarrollada con React y Firebase. Con la tematica de economía y finanzas en argentina.',
    lang: 'JavaScript Firebase',
    img: 'https://github.com/PeterDamianG/InvertirArgentina/raw/master/screenshots/noticias.jpg',
  },
  {
    name: 'PeterDamianG Site Web',
    url: 'https://github.com/PeterDamianG/PeterDamianG',
    desc: 'El desarrollo del sitio web personal, donde te encuentras actualmente.',
    lang: 'JavaScript Next',
    img: 'https://raw.githubusercontent.com/PeterDamianG/template-snowpack-react/main/logoreadme.jpg',
  },
];

export default listProyects;
