/**
 * A var type const for contain info set to display.
 * @const
 * @example
 * import textDinamicNav from 'layout/appbar/drawer/nav/textDinamicNav'
 * console.log(textDinamicNav[0]) // También puedes cambiar a otras resoluciones.
 */
const textDinamicNav = [
  'También puedes cambiar a otras resoluciones.',
  'Está página esta contruida con NextJS, excelente Framework.',
  'Aprovechando la tecnología de Vercel, la web es JAMStack.',
  'Mis conocimientos son preferentemente sobre la web.',
  'También soy un fanático de los videojuegos, ¡Búscame en Steam!',
  'He trabajado con más de diez personas en equipo.',
  'Las tecnologías son sólo herramientas, depende del desarrolador lo demás.',
  'La web es principalmente JavaScript, pero esto está hecho en TypeScript.',
  'El equilibrio entre simple y cargado, no soy diseñador.',
  '¡Haz llegado hasta aquí! Gracias por tu tiempo.',
] as const; // as const, this is readonly inmutable.

export default textDinamicNav;
