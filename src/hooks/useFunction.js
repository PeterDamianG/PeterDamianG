/** @module Utils */
import { useEffect } from 'react';
/**
 * A hook to automatic use a function over time.
 * @function useNextContent
 * @param {Function} func - A function to exec.
 * @param {Number} [time=6000] - A number integer to set timer in ms.
 * @example
 * import useNextContent from 'components/utils/useNextContent';
 * useNextContent(myFunc);
 * useNextContent(myFunc, 3000);
 */
const useNextContent = (func, time = 6000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      func();
    }, time);
    return () => clearTimeout(timer);
  }, [func, time]);
};

export default useNextContent;
