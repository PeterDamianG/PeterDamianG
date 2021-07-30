/** @module Sections/Hero */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SocialMedia from 'components/utils/socialmedia';
import ScrollDownSVG from 'components/icons/utils/scrolldown';
import useFunction from 'hooks/useFunction';
import { motion } from 'framer-motion';
import NotebookSVG from './notebook/NotebookSVG';
import { sectionStyle } from './hero.module.css';
import textContent from './content/textContent';
/**
 * A section call hero in the web.
 * @function Hero
 * @example
 * import Hero from 'components/main/sections/hero'
 * <Hero />
 */
const Hero = () => {
  // State for show notebook text and caption.
  const [number, setNumber] = useState(0);
  // Handler click on Notebook SVG
  const handlerClickNotebook = () => {
    if (number === textContent.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Hook to change states automatic.
  useFunction(handlerClickNotebook);
  // Other design responsive.
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <section className={sectionStyle}>
        <article>
          <motion.div
            layout
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            <h2>Peter Damián Gómez</h2>
            <h3>Web Developer</h3>
            <SocialMedia />
            {[number].map((numberInt) => (
              <motion.h4
                key={numberInt}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 1.5 } },
                }}
              >
                {textContent[number].caption}
              </motion.h4>
            ))}
          </motion.div>
          <motion.div
            layout
            initial='hidden'
            animate='visible'
            transition={{ duration: 1.5 }}
          >
            <NotebookSVG
              onClick={handlerClickNotebook}
              x={textContent[number].x}
              y={textContent[number].y}
              text={textContent[number].notebook}
            />
          </motion.div>
        </article>
        <ScrollDownSVG hash='about' />
      </section>
    );
  }
  // Render normal.
  return (
    <motion.div
      layout
      initial='hidden'
      animate='visible'
      transition={{ duration: 1 }}
    >
      <section className={sectionStyle}>
        <h2>Peter Damián Gómez</h2>
        {isPortrait && <h3>Web Developer</h3>}
        <SocialMedia />
        {isPortrait && (
          <motion.div
            layout
            initial='hidden'
            animate='visible'
            transition={{ duration: 1.5 }}
          >
            <NotebookSVG
              onClick={handlerClickNotebook}
              x={textContent[number].x}
              y={textContent[number].y}
              text={textContent[number].notebook}
            />
          </motion.div>
        )}
        {[number].map((numberInt) => (
          <motion.h4
            key={numberInt}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1.5 } },
            }}
          >
            {textContent[number].caption}
          </motion.h4>
        ))}
        <ScrollDownSVG hash='about' />
      </section>
    </motion.div>
  );
};

export default Hero;
