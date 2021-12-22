/**
 * A var type const for contain info set to display in Drawer.
 * @const
 * @example
 * import DrawerText from 'data/DrawerText'
 * console.log(DrawerText[0]) // También puedes cambiar a otras resoluciones.
 */
const DrawerText = [
  'También puedes cambiar a otras resoluciones.',
  'Está página esta contruida con NextJS, excelente Framework.',
  'Aprovechando la tecnología de Vercel, la web es JAMStack.',
  'Mis conocimientos son preferentemente sobre la web.',
  'También soy un fanático de los videojuegos, ¡Búscame en Steam!',
  'He trabajado con más de diez personas en equipo.',
  'Las tecnologías son sólo herramientas, depende del desarrolador lo demás.',
  'La web es principalmente JavaScript, pero esto está hecho en TypeScript.',
  'Curiosamente empecé usando Next 10, ¡Por cual vamos ya!',
  'El equilibrio entre simple y cargado, no soy diseñador.',
  'Las cryptomonedas, son el futuro que llego hace rato.',
  
  '¡Haz llegado hasta aquí! Gracias por tu tiempo.',
] as const; // as const, this is readonly inmutable.

export default DrawerText;
