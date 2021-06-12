/** @module Sections/Proyects */
import ScrollDownSVG from 'components/icons/utils/scrolldown';
import { sectionStyle } from './proyects.module.css';
import SetProyects from './setproyects/SetProyects';
/**
 * A section call proyects in the web.
 * @function Proyects
 * @example
 * import About from 'components/main/sections/proyects'
 * <Proyects />
 * @returns {JSX.Element} An element of React.
 */
const Proyects = () => (
  <section id='proyects' className={sectionStyle}>
    <h2>Proyectos</h2>
    <SetProyects />
    <ScrollDownSVG />
  </section>
);

export default Proyects;
