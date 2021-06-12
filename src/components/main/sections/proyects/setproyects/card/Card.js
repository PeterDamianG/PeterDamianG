/** @module Sections/Proyects */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import animationHelper from 'components/utils/animationHelper';
import { container, animateStyle } from './card.module.css';
/**
 * A component to render cards.
 * @function Card
 * @example
 * import Card from 'components/main/sections/setproyects/card/Card'
 * <Card />
 * @returns {JSX.Element} An element of React.
 */
const Card = ({ name, url, desc, lang, img, upIndex, downIndex }) => {
  // State for handle animation.
  const [animate, setAnimate] = useState(false);
  // Handle Click Arrow.
  const handleClickArrow = (upOrDown) => {
    animationHelper(setAnimate, 500);
    upOrDown();
  };
  // Other design with full media.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <article className={container}>
        <aside>
          <h3 className={animate ? animateStyle : ''}>{name}</h3>
          <h4 className={animate ? animateStyle : ''}>{lang}</h4>
          <p className={animate ? animateStyle : ''}>{desc}</p>
          <nav>
            <button type='button' onClick={() => handleClickArrow(downIndex)}>
              &lt;
            </button>
            <a href={url}>
              <button type='button'>¡Ir a GitHub!</button>
            </a>
            <button type='button' onClick={() => handleClickArrow(upIndex)}>
              &gt;
            </button>
          </nav>
        </aside>
        <img className={animate ? animateStyle : ''} alt={name} src={img} />
      </article>
    );
  }
  // Render Normal.
  return (
    <article className={container}>
      <h3 className={animate ? animateStyle : ''}>{name}</h3>
      <h4 className={animate ? animateStyle : ''}>{lang}</h4>
      <img className={animate ? animateStyle : ''} alt={name} src={img} />
      <p className={animate ? animateStyle : ''}>{desc}</p>
      <nav>
        <button type='button' onClick={() => handleClickArrow(downIndex)}>
          &lt;
        </button>
        <a href={url}>
          <button type='button'>¡Ir a GitHub!</button>
        </a>
        <button type='button' onClick={() => handleClickArrow(upIndex)}>
          &gt;
        </button>
      </nav>
    </article>
  );
};

export default Card;
