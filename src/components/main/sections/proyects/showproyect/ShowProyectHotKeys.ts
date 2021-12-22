import { useHotkeys } from 'react-hotkeys-hook';
/**
 * A custom hook for set hotkeys to ShowProyect.
 * @example
 * import ShowProyectHotKeys from 'main/sections/proyects/Showproyect/ShowProyectHotKeys'
 * ShowProyectHotKeys(handleUpIndex, handleDownIndex);
 */
const ShowProyectHotKeys = (
  upIndex: Function,
  downIndex: Function,
  dep: number,
): void => {
  // Set hotkey go to next proyect show.
  useHotkeys('right', () => upIndex(), {}, [dep]);
  // Set hotkey go to previus proyect show.
  useHotkeys('left', () => downIndex(), {}, [dep]);
};

export default ShowProyectHotKeys;
