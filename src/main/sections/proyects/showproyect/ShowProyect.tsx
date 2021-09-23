import { useState } from 'react';
import useFunctionOverTime from 'hooks/useFunctionOverTime';
import ShowProyectHotKeys from './ShowProyectHotKeys';
import listProyects from './listProyects';
import CardProyect from './card/CardProyect';
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
  const handleUpIndex = () =>
    index === listProyects.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  const handleDownIndex = () =>
    index === 0
      ? setIndex(listProyects.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  // Hook to change states automatic.
  useFunctionOverTime(handleUpIndex, 10000);
  // Set hotkeys.
  ShowProyectHotKeys(handleUpIndex, handleDownIndex);
  // Destructuring.
  const { name, URL, description, tech, img } = listProyects[index];
  // Render.
  return (
    <CardProyect
      name={name}
      URL={URL}
      description={description}
      tech={tech}
      img={img}
      upIndex={handleUpIndex}
      downIndex={handleDownIndex}
    />
  );
};

export default ShowProyect;
