/** @module Main/Sections/Hero */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SocialMedia from 'components/utils/socialmedia';
import ScrollDownSVG from 'components/icons/utils/scrolldown';
import animationHelper from 'components/utils/animationHelper';
import NotebookSVG from './components/NotebookSVG';
import { sectionStyle, animateStyle } from './hero.module.css';
import textContent from './components/textContent';
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
  // State for show notebook text and caption.
  const [number, setNumber] = useState(0);
  // State for handle animation.
  const [animate, setAnimate] = useState(false);
  // Handler click on Notebook SVG
  const handlerClickNotebook = () => {
    animationHelper(setAnimate, 500);
    if (number === textContent.length - 1) {
      setNumber(0);
    } else {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <section id='hero' className={sectionStyle}>
        <article>
          <div>
            <h1>Peter Damián Gómez</h1>
            <h3>Web Developer</h3>
            <SocialMedia />
            <h4 className={animate ? animateStyle : ''}>
              {textContent[number].caption}
            </h4>
          </div>
          <NotebookSVG
            className={animate ? animateStyle : ''}
            onClick={handlerClickNotebook}
            x={textContent[number].x}
            y={textContent[number].y}
            text={textContent[number].notebook}
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
      <SocialMedia />
      <NotebookSVG
        className={animate ? animateStyle : ''}
        onClick={handlerClickNotebook}
        x={textContent[number].x}
        y={textContent[number].y}
        text={textContent[number].notebook}
      />
      <h4 className={animate ? animateStyle : ''}>
        {textContent[number].caption}
      </h4>
      <ScrollDownSVG />
    </section>
  );
};

export default Hero;
