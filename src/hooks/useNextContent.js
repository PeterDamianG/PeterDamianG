/** @module Utils */
import { useEffect } from 'react';
/**
 * A hook to automatic next content in time effect.
 * @function useNextContent
 * @param {Number} state - A number integer to set a states like a 0, 1, 2, 3, etc.
 * @param {Function} setState - A function of useState to React, for change states.
 * @param {Number} limitState - A final number to restart the states to zero.
 * @param {Number} [time=6000] - A number integer to set timer in ms.
 * @example
 * import useNextContent from 'components/utils/useNextContent';
 * const [myState, setMyState] = useState(0);
 * useNextContent(myState, setMyState, (arr.length - 1));
 * useNextContent(myState, setMyState, (arr.length - 1), 3000);
 */
const useNextContent = (state, setState, limitState, time = 6000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (state === limitState) setState(0);
      else setState((prevNumber) => prevNumber + 1);
    }, time);
    return () => clearTimeout(timer);
  }, [limitState, setState, state, time]);
};

export default useNextContent;
