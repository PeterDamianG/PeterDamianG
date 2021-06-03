/** @module Icons/Utils */
import { all, scrollAnim } from './scrolldownsvg.module.css';
/**
 * Use a svg img like a scroll down visual help.
 * @function ScollDownSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import ScollDownSVG from 'components/icons/utils/scrolldown/ScollDownSVG'
 * <ScollDownSVG />
 * <ScollDownSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const ScollDownSVG = (props) => (
  <svg
    className={all}
    aria-label='Scroll Down'
    role='figure'
    width='48px'
    height='48px'
    viewBox='0 0 247 390'
    {...props}
  >
    <path
      className={scrollAnim}
      d='M123.359,79.775l0,72.843'
      strokeWidth={25}
    />
    <path
      d='M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z'
      fill='none'
      strokeWidth={25}
    />
  </svg>
);

export default ScollDownSVG;
