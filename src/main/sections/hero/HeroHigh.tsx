/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import ScrollDownSVG from '@components/icons/utils/scrolldown/ScrollDownSVG';
import useFunctionOverTime from 'hooks/useFunctionOverTime';
import style from './herohigh.module.css';
import Ide from './ide/Ide';
import content from './content/content';
/**
 * A section call hero in the web for high resolutions.
 * @example
 * import Hero from 'main/sections/hero/HeroHigh'
 * <HeroHigh />
 */
const HeroHigh = (): JSX.Element => {
  // State for change containt.
  const [number, setNumber] = useState(0);
  // Handler click for change state.
  const handlerClickChangeState = (): void => {
    if (number === content.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Hook to change states automatic.
  useFunctionOverTime(handlerClickChangeState, 15000);
  // Render.
  return (
    <section className={style.containerMain}>
      <article className={style.header}>
        <h2 className={style.title}>Peter Damián Gómez</h2>
        <h3 className={style.subtitle}>Web Developer</h3>
        <SocialMedia />
      </article>
      {[number].map((numberInt) => (
        <article
          onClick={handlerClickChangeState}
          onKeyPress={handlerClickChangeState}
          key={`IDE ${numberInt}`}
          className={style.containerIDE}
        >
          <Ide title={content[number].title}>{content[number].html()}</Ide>
        </article>
      ))}
      {[number].map((numberInt) => (
        <article
          onClick={handlerClickChangeState}
          onKeyPress={handlerClickChangeState}
          key={`Caption ${numberInt}`}
          className={style.textContent}
        >
          <h4 title='Haz me click, para leer el siguiente de mis pensamientos.'>
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

export default HeroHigh;
