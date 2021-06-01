/** @module Main/Sections/Hero */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ScrollDownSVG from 'components/icons/utils/scrolldown/ScrollDownSVG';
import NotebookSVG from './NotebookSVG';
import { sectionStyle } from './hero.module.css';
/**
 * A var type const for set info to display.
 * @const
 * @example
 * textingContent[0].notebook
 * return "<HTML>"
 * @returns {Array} An array of objects.
 */
const textingContent = [
  {
    notebook: '<HTML>',
    x: 750,
    y: 650,
    caption: `"Me pregunto. ¿Cómo pasamos de tres archivos estáticos, a diez sólo de configuración?"`,
  },
  {
    notebook: '<Script>',
    x: 750,
    y: 650,
    caption: `"Me pregunto. ¿Cuántas veces habré iterado sobre esté
    código?"`,
  },
  {
    notebook: '<Style>',
    x: 750,
    y: 650,
    caption: `"Me pregunto. ¿Es realmente necesario el CSS-in-JSS?"`,
  },
  {
    notebook: '<Main>',
    x: 750,
    y: 650,
    caption: `"Me pregunto. ¿Cuándo la semantica cambie, nos obligaran a adaptarnos nuevamente?"`,
  },
  {
    notebook: '<br />',
    x: 800,
    y: 650,
    caption: `"Me pregunto. ¿Hace cuánto que no utilizo tantas etiquetas, que apenas recuerdo su funcionamiento?"`,
  },
  {
    notebook: '<SVG>',
    x: 700,
    y: 650,
    caption: `"Me pregunto. ¿Cuándo aparecerá el sistema de graficos definitivo que nos una?"`,
  },
];
/**
 * A section call hero in the web.
 * @function Hero
 * @example
 * import Hero from 'components/main/sections/hero'
 * <Hero />
 * @returns {JSX.Element} An element of React.
 */
const Hero = () => {
  // State for show notebook text and caption.
  const [number, setNumber] = useState(
    Math.floor(Math.random() * textingContent.length),
  );
  // Handler set random number.
  const handerNumRandom = () =>
    setNumber(Math.floor(Math.random() * textingContent.length));
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
          <h4>{textingContent[number].caption}</h4>
        </div>
        <NotebookSVG
          onClick={handerNumRandom}
          x={textingContent[number].x}
          y={textingContent[number].y}
          text={textingContent[number].notebook}
        />
      </section>
    );
  }
  return (
    <section id='hero' className={sectionStyle}>
      <h1>Peter Damián Gómez</h1>
      <h3>Web Developer</h3>
      <NotebookSVG
        onClick={handerNumRandom}
        x={textingContent[number].x}
        y={textingContent[number].y}
        text={textingContent[number].notebook}
      />
      <h4>{textingContent[number].caption}</h4>
      <ScrollDownSVG />
    </section>
  );
};

export default Hero;
