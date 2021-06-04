/** @module Main/Sections/Hero */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SocialMedia from 'components/utils/socialmedia';
import ScrollDownSVG from 'components/icons/utils/scrolldown/ScrollDownSVG';
import NotebookSVG from './NotebookSVG';
import { sectionStyle } from './hero.module.css';
/**
 * A var type const for set info to display.
 * @const
 * @example
 * objectContent[0].notebook
 * return "<HTML>"
 * @returns {Array} An array of objects.
 */
const objectContent = [
  {
    notebook: '<HTML>',
    x: '750',
    y: '650',
    caption: `"Me pregunto. ¿Cómo pasamos de tres archivos estáticos, a diez sólo de configuración?"`,
  },
  {
    notebook: '<Script>',
    x: '750',
    y: '650',
    caption: `"Me pregunto. ¿Cuántas veces habré iterado sobre esté código?"`,
  },
  {
    notebook: '<Style>',
    x: '750',
    y: '650',
    caption: `"Me pregunto. ¿Es realmente necesario el CSS-in-JSS?"`,
  },
  {
    notebook: '<Main>',
    x: '750',
    y: '650',
    caption: `"Me pregunto. ¿Cuándo la semantica cambie, re-adaptaremos todas las webs?"`,
  },
  {
    notebook: '<br />',
    x: '800',
    y: '650',
    caption: `"Me pregunto. ¿Hace cuánto que no utilizo algunas etiquetas?"`,
  },
  {
    notebook: '<SVG>',
    x: '800',
    y: '650',
    caption: `"Me pregunto. ¿Cuándo aparecerá el sistema de graficos definitivo?"`,
  },
];
/**
 * A function to get a random number of array objectContent.
 * @function getRandomNumber
 * @example
 * getRandomNumber()
 * return 2
 * @returns {Number} An integer number.
 */
const getRandomNumber = () => Math.floor(Math.random() * objectContent.length);
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
  const [number, setNumber] = useState(getRandomNumber());
  // Handler set random number.
  const handlerNumRandom = () => {
    const randomNumber = getRandomNumber();
    return number === randomNumber
      ? handlerNumRandom()
      : setNumber(randomNumber);
  };
  // Other design with full media.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <section id='hero' className={sectionStyle}>
        <article>
          <div>
            <h1>Peter Damián Gómez</h1>
            <h3>Web Developer</h3>
            <SocialMedia type />
            <h4>{objectContent[number].caption}</h4>
          </div>
          <NotebookSVG
            onClick={handlerNumRandom}
            x={objectContent[number].x}
            y={objectContent[number].y}
            text={objectContent[number].notebook}
          />
        </article>
        <ScrollDownSVG />
      </section>
    );
  }
  return (
    <section id='hero' className={sectionStyle}>
      <h1>Peter Damián Gómez</h1>
      <h3>Web Developer</h3>
      <SocialMedia type />
      <NotebookSVG
        onClick={handlerNumRandom}
        x={objectContent[number].x}
        y={objectContent[number].y}
        text={objectContent[number].notebook}
      />
      <h4>{objectContent[number].caption}</h4>
      <ScrollDownSVG />
    </section>
  );
};

export default Hero;
