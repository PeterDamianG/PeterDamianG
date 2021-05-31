/** @module Main/Sections/Hero */
import { useMediaQuery } from 'react-responsive';
import ScrollDownSVG from 'components/icons/utils/ScrollDownSVG';
import NotebookSVG from './NotebookSVG';
import { sectionStyle } from './hero.module.css';
/**
 * A section call hero in the web.
 * @function Hero
 * @example
 * import Hero from 'components/main/sections/hero'
 * <Hero />
 * @returns {JSX.Element} An element of React.
 */
const Hero = () => {
  // Other design with full media.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  if (isDesktopOrLaptop) {
    return (
      <section id='hero' className={sectionStyle}>
        <div>
          <h1>Peter Damián Gómez</h1>
          <h3>Web Developer</h3>
          <h4>
            &quot;Me pregunto. ¿Cuántas veces habré iterado sobre esté
            código?&quot;
          </h4>
        </div>
        <NotebookSVG />
      </section>
    );
  }
  return (
    <section id='hero' className={sectionStyle}>
      <h1>Peter Damián Gómez</h1>
      <h3>Web Developer</h3>
      <NotebookSVG />
      <h4>
        &quot;Me pregunto. ¿Cuántas veces habré iterado sobre esté código?&quot;
      </h4>
      <ScrollDownSVG width='64px' height='64px' />
    </section>
  );
};

export default Hero;
