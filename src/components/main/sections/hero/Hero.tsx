import { useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import ScrollDownSVG from '@components/icons/utils/scrolldown/ScrollDownSVG';
import useFunctionOverTime from '@hooks/useFunctionOverTime';
import HeroContent from '@data/HeroContent';
import { PERSONAL_INFO } from '@data/siteData';
import Ide from './ide/Ide';
import style from './hero.module.css';
/**
 * A section call hero in the web.
 * @example
 * import Hero from 'main/sections/hero/Hero'
 * <Hero />
 */
const Hero = (): JSX.Element => {
  // State for change HeroContent.
  const [number, setNumber] = useState(0);
  // Handler click for change state.
  const handlerClickChangeState = (): void => {
    if (number === HeroContent.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Hook to change states automatic.
  useFunctionOverTime(handlerClickChangeState, 15000);
  // Check responsive — mostrar IDE en portrait o en pantallas ≥768px
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isEnoughWidth = useMediaQuery('(min-width: 768px)');
  // Render.
  return (
    <section className={style.containerMain}>
      <article className={style.header}>
        <h2 className={style.title}>{PERSONAL_INFO.name}</h2>
        <h3 className={style.subtitle}>{PERSONAL_INFO.title}</h3>
        <SocialMedia />
      </article>
      <article
        key={number}
        onClick={handlerClickChangeState}
        className={style.containerIDE}
        role='presentation'
      >
        {(isPortrait || isEnoughWidth) && (
          <Ide title={HeroContent[number].title}>
            {HeroContent[number].html()}
          </Ide>
        )}
        <h4
          title='Haz me click, para ver otro de mis pensamientos.'
          className={style.heroContent}
          aria-live='polite'
        >
          {HeroContent[number].caption}
        </h4>
      </article>
      <a className={style.scrollsvg} href='#about'>
        <ScrollDownSVG />
      </a>
    </section>
  );
};

export default Hero;
