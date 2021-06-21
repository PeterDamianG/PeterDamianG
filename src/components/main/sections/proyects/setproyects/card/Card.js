/** @module Sections/Proyects */
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import animationHelper from 'components/utils/animationHelper';
import Image from 'next/image';
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
    animationHelper(setAnimate, 1000);
    upOrDown();
  };
  // Other design with full media.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Design for medium device like a tablet.
  const isMediumDevice = useMediaQuery({ minWidth: 640, maxWidth: 1280 });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <article className={container}>
        <article>
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
        </article>
        <Image
          className={animate ? animateStyle : ''}
          src={img}
          alt={name}
          width={800}
          height={800}
        />
      </article>
    );
  }
  // Render Normal.
  return (
    <article className={container}>
      <h3 className={animate ? animateStyle : ''}>{name}</h3>
      <h4 className={animate ? animateStyle : ''}>{lang}</h4>
      <Image
        className={animate ? animateStyle : ''}
        src={img}
        alt={name}
        width={isMediumDevice ? 550 : 300}
        height={isMediumDevice ? 600 : 400}
      />
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
