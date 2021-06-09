import { useMediaQuery } from 'react-responsive';
import { container } from './card.module.css';

const Card = ({ name, url, desc, lang, img, upIndex, downIndex }) => {
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
            <button type='button' onClick={downIndex}>
              &lt;
            </button>
            <a href={url}>
              <button type='button'>¡Ir a GitHub!</button>
            </a>
            <button type='button' onClick={upIndex}>
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
      <h3>{name}</h3>
      <h4>{lang}</h4>
      <img alt={name} src={img} />
      <p>{desc}</p>
      <nav>
        <button type='button' onClick={downIndex}>
          &lt;
        </button>
        <a href={url}>
          <button type='button'>¡Ir a GitHub!</button>
        </a>
        <button type='button' onClick={upIndex}>
          &gt;
        </button>
      </nav>
    </article>
  );
};

export default Card;
