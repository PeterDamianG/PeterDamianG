/** @module Sections/Proyects */
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { motion } from 'framer-motion';
import useFunction from 'hooks/useFunction';
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
  useFunction(handleUpIndex, 10000);
  // Set hotkey go to next proyect show.
  useHotkeys('right', handleUpIndex, {}, [index]);
  // Set hotkey go to previus proyect show.
  useHotkeys('left', handleDownIndex, {}, [index]);
  // Destructuring
  const { name, url, desc, lang, img, isBitbucket } = listProyects[index];
  return (
    <motion.div
      layout
      initial='hidden'
      animate='visible'
      transition={{ duration: 1 }}
    >
      <Card
        name={name}
        url={url}
        desc={desc}
        lang={lang}
        img={img}
        upIndex={handleUpIndex}
        downIndex={handleDownIndex}
        isBitbucket={isBitbucket}
      />
    </motion.div>
  );
};

export default SetProyects;
