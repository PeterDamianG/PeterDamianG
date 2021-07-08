/** @module Sections/Hero */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SocialMedia from 'components/utils/socialmedia';
import ScrollDownSVG from 'components/icons/utils/scrolldown';
import useNextContent from 'hooks/useNextContent';
import NotebookSVG from './notebook/NotebookSVG';
import { sectionStyle } from './hero.module.css';
import textContent from './content/textContent';
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
  const [number, setNumber] = useState(0);
  // Hook to change states automatic.
  useNextContent(number, setNumber, textContent.length - 1);
  // Handler click on Notebook SVG
  const handlerClickNotebook = () => {
    if (number === textContent.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Other design responsive.
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <section id='hero' className={sectionStyle}>
        <article>
          <div>
            <h2>Peter Damián Gómez</h2>
            <h3>Web Developer</h3>
            <SocialMedia />
            <h4>{textContent[number].caption}</h4>
          </div>
          <NotebookSVG
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
  // Render normal.
  return (
    <section id='hero' className={sectionStyle}>
      <h2>Peter Damián Gómez</h2>
      {isPortrait && <h3>Web Developer</h3>}
      <SocialMedia />
      {isPortrait && (
        <NotebookSVG
          onClick={handlerClickNotebook}
          x={textContent[number].x}
          y={textContent[number].y}
          text={textContent[number].notebook}
        />
      )}
      <h4>{textContent[number].caption}</h4>
      <ScrollDownSVG />
    </section>
  );
};

export default Hero;
