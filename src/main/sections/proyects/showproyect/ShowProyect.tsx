import { useState } from 'react';
import useFunctionOverTime from 'hooks/useFunctionOverTime';
import ShowProyectHotKeys from './ShowProyectHotKeys';
import listProyects from './listProyects';
import Button from '@components/ui/button/Button';
import CardProyect from './card/CardProyect';
import PaginationDot from './pagination/PaginationDot';
import * as css from './showproyect.module.css';
/**
 * A component to set up what proyects is render.
 * @example
 * import ShowProyect from 'main/sections/proyects/showproyect/ShowProyect'
 * <ShowProyect />
 */
const ShowProyect = (): JSX.Element => {
  // State of index about actual element.
  const [index, setIndex] = useState(0);
  // Handler for states.
  const handleUpIndex = (): void =>
    index === listProyects.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  const handleDownIndex = (): void =>
    index === 0
      ? setIndex(listProyects.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  const handleSetIndex = (number: number): void => setIndex(number);
  // Hook to change states automatic.
  useFunctionOverTime(handleUpIndex, 16000);
  // Set hotkeys.
  ShowProyectHotKeys(handleUpIndex, handleDownIndex, index);
  // Destructuring.
  const { name, URL, description, tech, img } = listProyects[index];
  // Render.
  return (
    <section className={css['container']}>
      <Button
        type='button'
        className={css['slide-button']}
        aria-label='Previous Button'
        role='button'
        onClick={handleDownIndex}
        title='Retroceder al anterior proyecto. Acceso rápido flecha izquierda ←.'
      >
        &lt;
      </Button>
      <div className={css['containerCardPag']}>
        <CardProyect
          name={name}
          URL={URL}
          description={description}
          tech={tech}
          img={img}
        />
        <PaginationDot
          size={Array.from(Array(listProyects.length).keys())}
          active={index}
          setIndex={handleSetIndex}
        />
      </div>
      <Button
        type='button'
        className={css['slide-button']}
        aria-label='Next Button'
        role='button'
        onClick={handleUpIndex}
        title='Avanzar al siguiente proyecto. Acceso rápido flecha derecha →.'
      >
        &gt;
      </Button>
    </section>
  );
};

export default ShowProyect;
