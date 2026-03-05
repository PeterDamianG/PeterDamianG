import { useState, useCallback } from 'react';
import Button from '@components/ui/button/Button';
import ListProyects from '@data/ListProyects';
import useShowProyectHotKeys from './useShowProyectHotKeys';
import CardProyect from './card/CardProyect';
import PaginationDot from './pagination/PaginationDot';
import style from './showproyect.module.css';

// Calculado una sola vez — evita recrear el array en cada render
const PAGINATION_SIZE = Array.from(Array(ListProyects.length).keys());

/**
 * A component to set up what proyects is render.
 * @example
 * import ShowProyect from 'main/sections/proyects/showproyect/ShowProyect'
 * <ShowProyect />
 */
const ShowProyect = (): JSX.Element => {
  // State of index about actual element.
  const [index, setIndex] = useState(0);
  // Handlers estables con useCallback — evitan que ShowProyectHotKeys re-registre listeners en cada render.
  const handleUpIndex = useCallback(
    (): void =>
      setIndex((prev) => (prev === ListProyects.length - 1 ? 0 : prev + 1)),
    [],
  );
  const handleDownIndex = useCallback(
    (): void =>
      setIndex((prev) => (prev === 0 ? ListProyects.length - 1 : prev - 1)),
    [],
  );
  const handleSetIndex = useCallback(
    (number: number): void => setIndex(number),
    [],
  );
  // Set hotkeys.
  useShowProyectHotKeys(handleUpIndex, handleDownIndex);
  // Destructuring.
  const { name, URL, description, tech, img } = ListProyects[index];
  // Render.
  return (
    <section className={style.container}>
      <Button
        type='button'
        className={style.slideButton}
        aria-label='Previous Button'
        onClick={handleDownIndex}
        title='Retroceder al anterior proyecto. Acceso rápido flecha izquierda ←.'
      >
        &lt;
      </Button>
      <div className={style.containerCardPag}>
        <CardProyect
          name={name}
          URL={URL}
          description={description}
          tech={tech}
          img={img}
        />
        <PaginationDot
          size={PAGINATION_SIZE}
          active={index}
          setIndex={handleSetIndex}
        />
      </div>
      <Button
        type='button'
        className={style.slideButton}
        aria-label='Next Button'
        onClick={handleUpIndex}
        title='Avanzar al siguiente proyecto. Acceso rápido flecha derecha →.'
      >
        &gt;
      </Button>
    </section>
  );
};

export default ShowProyect;
