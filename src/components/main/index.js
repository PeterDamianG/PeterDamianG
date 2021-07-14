/** @module Sections */
import { mainStyle } from './main.module.css';
import Hero from './sections/hero';
import About from './sections/about';
import Proyects from './sections/proyects';
import Contact from './sections/contact';
/**
 * A tag main container for sections of the web.
 * @function Main
 * @example
 * import Main from 'components/main'
 * <Main />
 * @returns {JSX.Element} An element of React.
 */
const Main = () => (
  <main className={mainStyle}>
    <Hero />
    <About />
    <Proyects />
    <Contact />
  </main>
);

export default Main;
