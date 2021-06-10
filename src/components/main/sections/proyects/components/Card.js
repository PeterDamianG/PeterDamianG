import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { container, animateStyle } from './card.module.css';

const Card = ({ name, url, desc, lang, img, upIndex, downIndex }) => {
  // State for handle animation.
  const [animate, setAnimate] = useState(false);

  const handleClickLeftArrow = () => {
    clearTimeout();
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
    downIndex();
  };

  const handleClickRightArrow = () => {
    clearTimeout();
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
    upIndex();
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
          <h3>{name}</h3>
          <h4>{lang}</h4>
          <p>{desc}</p>
          <nav>
            <button type='button' onClick={handleClickLeftArrow}>
              &lt;
            </button>
            <a href={url}>
              <button type='button'>¡Ir a GitHub!</button>
            </a>
            <button type='button' onClick={handleClickRightArrow}>
              &gt;
            </button>
          </nav>
        </aside>
        <img alt={name} src={img} />
      </article>
    );
  }
  return (
    <article className={container}>
      <h3 className={animate ? animateStyle : ''}>{name}</h3>
      <h4 className={animate ? animateStyle : ''}>{lang}</h4>
      <img className={animate ? animateStyle : ''} alt={name} src={img} />
      <p className={animate ? animateStyle : ''}>{desc}</p>
      <nav>
        <button type='button' onClick={handleClickLeftArrow}>
          &lt;
        </button>
        <a href={url}>
          <button type='button'>¡Ir a GitHub!</button>
        </a>
        <button type='button' onClick={handleClickRightArrow}>
          &gt;
        </button>
      </nav>
    </article>
  );
};

export default Card;
