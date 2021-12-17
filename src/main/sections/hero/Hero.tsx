import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import ScrollDownSVG from '@components/icons/utils/scrolldown/ScrollDownSVG';
import useFunctionOverTime from 'hooks/useFunctionOverTime';
import style from './hero.module.css';
import Ide from './ide/Ide';
import content from './content/content';
/**
 * A section call hero in the web.
 * @example
 * import Hero from 'main/sections/hero/Hero'
 * <Hero />
 */
const Hero = (): JSX.Element => {
  // State for change containt.
  const [number, setNumber] = useState(0);
  // Handler click for change state.
  const handlerClickChangeState = (): void => {
    if (number === content.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Hook to change states automatic.
  useFunctionOverTime(handlerClickChangeState, 15000);
  // Check responsive.
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isEnoughWidth = useMediaQuery({
    query: '(min-width: 900px)',
  });
  // Render.
  return (
    <section className={style.containerMain}>
      <article className={style.header}>
        <h2 className={style.title}>Peter Damián Gómez</h2>
        <h3 className={style.subtitle}>Web Developer</h3>
        <SocialMedia />
      </article>
      {[number].map((numberInt) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <article
          key={numberInt}
          onClick={handlerClickChangeState}
          onKeyPress={(): null => null}
          className={style.containerIDE}
        >
          {(isPortrait || isEnoughWidth) && (
            <Ide title={content[number].title}>{content[number].html()}</Ide>
          )}
          <h4
            title='Haz me click, para ver otro de mis pensamientos.'
            className={style.textContent}
          >
            {content[number].caption}
          </h4>
        </article>
      ))}
      <a className={style.scrollsvg} href='#about'>
        <ScrollDownSVG />
      </a>
    </section>
  );
};

export default Hero;
