import Button from '@components/ui/button/Button';
import * as css from './paginationdot.module.css';

type PaginationDotProps = {
  size: number[];
  active: number;
  setIndex: Function;
};
/**
 * A component to render dots like a pagination.
 * @example
 * import PaginationDot from 'main/sections/showproyect/card/PaginationDot'
 * <PaginationDot/>
 */
const PaginationDot = ({
  size,
  active,
  setIndex,
}: PaginationDotProps): JSX.Element => (
  <section className={css['spaceButtonDot']}>
    {size.map((number) => (
      <Button
        key={number}
        className={
          active === number ? css['buttonDotActive'] : css['buttonDot']
        }
        title={`Haz me click, para ir proyecto número: ${number}.`}
        onClick={() => setIndex(number)}
      >
        &nbsp;
      </Button>
    ))}
  </section>
);

export default PaginationDot;
