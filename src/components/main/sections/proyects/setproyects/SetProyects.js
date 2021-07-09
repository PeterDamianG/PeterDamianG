/** @module Sections/Proyects */
import { useState } from 'react';
import useNextContent from 'hooks/useNextContent';
import listProyects from './list/listProyects';
import Card from './card/Card';
/**
 * A component to set up renders about proyects.
 * @function SetProyects
 * @example
 * import SetProyects from 'components/main/sections/setproyects/SetProyects'
 * <SetProyects />
 * @returns {JSX.Element} An element of React.
 */
const SetProyects = () => {
  // State of index about actual element.
  const [index, setIndex] = useState(0);
  // Hook to change states automatic.
  useNextContent(index, setIndex, listProyects.length - 1, 10000);
  // Handler for states.
  const handleUpIndex = () =>
    index === listProyects.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  const handleDownIndex = () =>
    index === 0
      ? setIndex(listProyects.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  // Destructuring
  const { name, url, desc, lang, img } = listProyects[index];
  return (
    <Card
      name={name}
      url={url}
      desc={desc}
      lang={lang}
      img={img}
      upIndex={handleUpIndex}
      downIndex={handleDownIndex}
    />
  );
};

export default SetProyects;
