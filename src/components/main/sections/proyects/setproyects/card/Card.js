/** @module Sections/Proyects */
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { container } from './card.module.css';
/**
 * A component to render cards.
 * @function Card
 * @example
 * import Card from 'components/main/sections/setproyects/card/Card'
 * <Card />
 * @returns {JSX.Element} An element of React.
 */
const Card = ({ name, url, desc, lang, img, upIndex, downIndex }) => {
  // Handle Click Arrow.
  const handleClickArrow = (upOrDown) => {
    upOrDown();
  };
  // Other design.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isMediumDevice = useMediaQuery({ minWidth: 640, maxWidth: 1280 });
  const isLandscape = useMediaQuery({ orientation: 'landscape' });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <article className={container}>
        <article>
          <h3>{name}</h3>
          <h4>{lang}</h4>
          <p>{desc}</p>
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
        <Image src={img} alt={name} width={800} height={800} />
      </article>
    );
  }
  // Render Normal.
  return (
    <article className={container}>
      {isLandscape || <h3>{name}</h3>}
      <h4>{lang}</h4>
      <Image
        src={img}
        alt={name}
        width={isMediumDevice ? 550 : 300}
        height={isMediumDevice ? 600 : 400}
      />
      <p>{desc}</p>
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
