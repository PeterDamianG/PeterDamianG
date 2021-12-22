import { useState } from 'react';
import Button from '@components/ui/button/Button';
import ListProyects from '@data/ListProyects';
import ShowProyectHotKeys from './ShowProyectHotKeys';
import CardProyect from './card/CardProyect';
import PaginationDot from './pagination/PaginationDot';
import style from './showproyect.module.css';
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
    index === ListProyects.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  const handleDownIndex = (): void =>
    index === 0
      ? setIndex(ListProyects.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  const handleSetIndex = (number: number): void => setIndex(number);
  // Set hotkeys.
  ShowProyectHotKeys(handleUpIndex, handleDownIndex, index);
  // Destructuring.
  const { name, URL, description, tech, img } = ListProyects[index];
  // Render.
  return (
    <section className={style.container}>
      <Button
        type='button'
        className={style.slideButton}
        aria-label='Previous Button'
        role='button'
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
          size={Array.from(Array(ListProyects.length).keys())}
          active={index}
          setIndex={handleSetIndex}
        />
      </div>
      <Button
        type='button'
        className={style.slideButton}
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
