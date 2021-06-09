import { container } from './card.module.css';

const Card = ({ name, url, desc, lang, img, upIndex, downIndex }) => (
  <article className={container}>
    <h3>{name}</h3>
    <h4>{lang}</h4>
    <img alt={name} src={img} />
    <p>{desc}</p>
    <nav>
      <button type='button' onClick={downIndex}>
        Anterior
      </button>
      <a href={url}>
        <button type='button'>¡Ir a GitHub!</button>
      </a>
      <button type='button' onClick={upIndex}>
        Siguiente
      </button>
    </nav>
  </article>
);

export default Card;
