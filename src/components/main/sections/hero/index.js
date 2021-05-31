/** @module Main/Sections/Hero */
import { useMediaLayout } from 'use-media';
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
  const isFullMedia = useMediaLayout({ minWidth: '1280px' });
  if (isFullMedia) {
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
        <ScrollDownSVG />
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
      <ScrollDownSVG />
    </section>
  );
};

export default Hero;
