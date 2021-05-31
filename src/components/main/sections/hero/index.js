/** @module Main/Sections/Hero */
import NotebookSVG from './NotebookSVG';
/**
 * A section call hero in the web.
 * @function Hero
 * @example
 * import Hero from 'components/main/sections/hero'
 * <Hero />
 * @returns {JSX.Element} An element of React.
 */
const Hero = () => (
  <section id='hero'>
    <p>Hero</p>
    <NotebookSVG />
  </section>
);

export default Hero;
