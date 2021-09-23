import Button from '@components/ui/button/Button';

type CardNavProps = {
  upIndex: Function;
  downIndex: Function;
  URL: string;
};
/**
 * A component to complement CardProyect component to add navigation card.
 * @function CardNav
 * @param {Function} props.downIndex - Function to down index from parent component.
 * @param {Function} props.upIndex - Function to up index from parent component.
 * @param {String} props.URL - A string like a url to set button redirect.service.
 * @example
 * import CardNav from 'main/sections/showproyect/card/CardNav'
 * <CardNav upIndex={upIndex} downIndex={downIndex} URL={URL} />
 */
const CardNav = ({ upIndex, downIndex, URL }: CardNavProps): JSX.Element => (
  <nav>
    <Button onClick={() => downIndex()}>&lt;</Button>
    <a href={URL} target='_blank' rel='noreferrer'>
      <Button>Ir a Repositorio</Button>
    </a>
    <Button onClick={() => upIndex()}>&gt;</Button>
  </nav>
);

export default CardNav;
