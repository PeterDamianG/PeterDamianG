import AlkemyChallenger from '@proyectsIMG/AlkemyChallenger.jpg';
import AngularChallengerAlkemy from '@proyectsIMG/AngularChallengerAlkemy.jpg';
import TemplarKnightGuild from '@proyectsIMG/TemplarKnightGuild.jpg';
import LoRHelper from '@proyectsIMG/LoRHelper.jpg';
import ArtifactHelper from '@proyectsIMG/ArtifactHelper.jpg';
import AlkemyFinalProyect from '@proyectsIMG/AlkemyFinalProyect.jpg';
import InvertirArgentina from '@proyectsIMG/InvertirArgentina.jpg';
/**
 * An array with contain info about proyectos for set to display.
 * @const
 * @example
 * import Card from 'data/ListProyect'
 * ListProyects[0].name
 */
const ListProyects = [
  {
    name: 'ChallengeJS Alkemy',
    URL: 'https://github.com/PeterDamianG/challengejs-alkemy',
    description:
      'Este repositorio, es una posible solución al desafío de javascript propuesto por la aceleradora Alkemy.',
    tech: 'JavaScript React',
    img: AlkemyChallenger,
  },
  {
    name: 'ONG Team 42 - t42-project',
    URL: 'https://github.com/PeterDamianG/AlkemyFinalProyect',
    description:
      'Proyecto colaborativo entre más de 10 personas, conformado por desarrolladores y supervisores.',
    tech: 'React Express',
    img: AlkemyFinalProyect,
  },
  {
    name: 'Challenge Angular Blog',
    URL: 'https://github.com/PeterDamianG/ChallengeAngularBlog',
    description:
      'Desarrollo de un blog en angular. Como desafío propuesto por acelleradora Alkemy.',
    tech: 'TypeScript Angular',
    img: AngularChallengerAlkemy,
  },
  {
    name: 'TemplarKnightsGuild',
    URL: 'https://github.com/PeterDamianG/TemplarKnightsGuild',
    description:
      'Este es un sitio web, desarrollado como practica. Es una página de una guild de videojuegos, con contenido minimo sobre el mismo.',
    tech: 'JavaScript Vue',
    img: TemplarKnightGuild,
  },
  {
    name: 'LoRHelper',
    URL: 'https://github.com/PeterDamianG/LoRHelper',
    description:
      'Esta es un prototipo de una APP de escritorio, a modo de tracker para el juego de cartas de Legends of Runeterra.',
    tech: 'C# WPF',
    img: LoRHelper,
  },
  {
    name: 'ArtifactHelper',
    URL: 'https://github.com/PeterDamianG/ArtifactHelper',
    description:
      'Un prototipo para una APP no oficial, a modo de "helper" para el juego de cartas de Artifact Card Game Dota2.',
    tech: 'JavaScript Electron',
    img: ArtifactHelper,
  },
  {
    name: 'InvertirArgentina',
    URL: 'https://github.com/PeterDamianG/InvertirArgentina',
    description:
      'Prototipo de una página web, desarrollada con React y Firebase. Con la tematica de economía y finanzas en argentina.',
    tech: 'JavaScript Firebase',
    img: InvertirArgentina,
  },
] as const;

export default ListProyects;
