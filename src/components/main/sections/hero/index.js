/** @module Main/Sections/Hero */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SocialMedia from 'components/utils/socialmedia';
import ScrollDownSVG from 'components/icons/utils/scrolldown/ScrollDownSVG';
import NotebookSVG from './components/NotebookSVG';
import { sectionStyle } from './hero.module.css';
import objectContent from './components/objectContent';
/**
 * A function to get a random number of array objectContent.
 * @function getRandomNumber
 * @example
 * getRandomNumber()
 * // return 2
 * @returns {Number} An integer number of length to objectContent.
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
