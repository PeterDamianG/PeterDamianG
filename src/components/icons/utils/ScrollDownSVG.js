/** @module Icons/Utils */
/**
 * Use a svg img like a scroll down visual help.
 * @function ScollDownSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import ScollDownSVG from 'components/icons/utils/ScollDownSVG'
 * <ScollDownSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const ScollDownSVG = (props) => (
  <svg
    viewBox='0 0 247 390'
    fillRule='evenodd'
    clipRule='evenodd'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeMiterlimit={1.5}
    {...props}
  >
    <path
      d='M123 80v73m114-30a113 113 0 00-227 0v144a113 113 0 00227 0V123z'
      fill='none'
      stroke='#fff'
      strokeWidth={20}
    />
  </svg>
);

export default ScollDownSVG;
