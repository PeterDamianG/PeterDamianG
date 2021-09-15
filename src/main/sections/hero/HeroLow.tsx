import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import ScrollDownSVG from '@components/icons/utils/scrolldown/ScrollDownSVG';
import useFunctionOverTime from 'hooks/useFunctionOverTime';
import * as css from './herolow.module.css';
import Ide from './ide/Ide';
import content from './content/content';
/**
 * A section call hero in the web for low resolutions.
 * @example
 * import Hero from 'main/sections/hero/HeroLow'
 * <HeroLow />
 */
const HeroLow = (): JSX.Element => {
  // State for change containt.
  const [number, setNumber] = useState(0);
  // Handler click for change state.
  const handlerClickChangeState = (): void => {
    if (number === content.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Hook to change states automatic.
  useFunctionOverTime(handlerClickChangeState, 15000);
  // Other design responsive.
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isEnoughWidth = useMediaQuery({
    query: '(min-width: 900px)',
  });
  // Render.
  return (
    <>
      <article className={css['containerMain']}>
        <h2 className={css['title']}>Peter Damián Gómez</h2>
        <h3 className={css['subtitle']}>Web Developer</h3>
        <SocialMedia />
      </article>
      {[number].map((numberInt) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <article
          onClick={handlerClickChangeState}
          onKeyPress={handlerClickChangeState}
          key={numberInt}
          className={css['containerDinamic']}
        >
          {(isPortrait || isEnoughWidth) && (
            <Ide title={content[number].title}>{content[number].html()}</Ide>
          )}
          <h4 className={css['textContent']}>{content[number].caption}</h4>
        </article>
      ))}
      <a href='#about'>
        <ScrollDownSVG />
      </a>
    </>
  );
};

export default HeroLow;
