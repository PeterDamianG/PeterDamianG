/** @module Icons/Utils */
import { arrow } from './arrowup.module.css';
/**
 * Svg img an arrow up to redirect initial section.
 * @function ArrowUp
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import ArrowUp from 'components/icons/utils/arrowup/ArrowUp'
 * <ArrowUp />
 */
const LoaderSpinner = (props) => (
  <svg
    className={arrow}
    viewBox='0 0 512 512'
    data-tip='Vuelve al inicio.'
    onClick={() => {
      window.location.hash = props.hash;
    }}
    width='50%'
    height='50%'
    {...props}
  >
    <path d='M477 217L263 3a11 11 0 00-15 0L35 217a11 11 0 008 18h117v267c0 5 5 10 11 10h171c6 0 10-5 10-10V235h117a11 11 0 008-18z' />
  </svg>
);

export default LoaderSpinner;
