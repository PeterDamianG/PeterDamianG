/** @module Sections/Proyects */
/**
 * A component to render nav cards.
 * @function CardNav
 * @param {Function} props.handleClickArrow - Function to handler click on arrow buttons.
 * @param {Function} props.downIndex - Function to down index from parent component.
 * @param {Function} props.upIndex - Function to up index from parent component.
 * @param {String} props.url - A string like a url to set button redirect.
 * @example
 * import CardNav from 'components/main/sections/setproyects/card/CardNav'
 * <CardNav handleClickArrow={handleClickArrow} upIndex={upIndex} downIndex={downIndex} url={url} />
 */
const CardNav = ({ handleClickArrow, downIndex, upIndex, url }) => (
  <nav>
    <button
      data-tip='Ir al anterior o presiona flecha izquierda en tu teclado.'
      type='button'
      onClick={() => handleClickArrow(downIndex)}
    >
      &lt;
    </button>
    <a href={url}>
      <button type='button'>¡Ir a GitHub!</button>
    </a>
    <button
      data-tip='Ir al siguiente o presiona flecha derecha en tu teclado.'
      type='button'
      onClick={() => handleClickArrow(upIndex)}
    >
      &gt;
    </button>
  </nav>
);

export default CardNav;
