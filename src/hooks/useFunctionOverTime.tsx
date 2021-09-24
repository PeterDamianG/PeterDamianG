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
const useFunctionOverTime = (callback: Function, time = 6000): number => {
  // State to count every call of function.
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
      setCount((prev) => prev + 1);
    }, time);
    return (): void => clearTimeout(timer);
  }, [callback, time]);
  // Return number of call to function.
  return count;
};

export default useFunctionOverTime;
