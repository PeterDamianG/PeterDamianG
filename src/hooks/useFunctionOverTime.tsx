import { useState, useEffect } from 'react';
/**
 * A hook to automatic use a function over time.
 * @param callback - A function to exec.
 * @param time - A number integer to set timer in ms.
 * @example
 * import useFunctionOverTime from 'hooks/useFunctionOverTime';
 * useFunctionOverTime(myFunc);
 * useFunctionOverTime(myFunc, 3000);
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const useFunctionOverTime = (callback: Function, time = 6000): number => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
      setCount((prev) => prev + 1);
    }, time);
    return (): void => clearTimeout(timer);
  }, [callback, time]);

  return count;
};

export default useFunctionOverTime;
