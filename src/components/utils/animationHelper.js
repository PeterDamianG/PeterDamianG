/** @module Utils */
/**
 * A function wrapper to help in react animations.
 * @function animationHelper
 * @example
 * import animationHelper from 'components/utils/animationHelper';
 *
 * animationHelper(setAnimate, 1000);
 */
const animationHelper = (setAnimate, time = 500) => {
  clearTimeout();
  setAnimate(true);
  setTimeout(() => setAnimate(false), time);
};

export default animationHelper;
