/** @module Icons/Utils */
/**
 * Use a svg img like a infinity loader-spinner.
 * @function LoaderSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import LoaderSVG from 'components/icons/LoaderSVG'
 * <LoaderSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const LoaderSVG = (props) => (
  <svg
    aria-label='Loader Spinner'
    role='progressbar'
    viewBox='-100 -10 300 300'
    {...props}
  >
    <rect width={12} height={12} x={44} y={19} rx={8.8} ry={3.8}>
      <animate
        attributeName='opacity'
        begin='-0.8333333333333334s'
        dur='1s'
        keyTimes='0;1'
        repeatCount='indefinite'
        values='1;0'
      />
    </rect>
    <rect
      width={12}
      height={12}
      x={44}
      y={19}
      rx={8.8}
      ry={3.8}
      transform='rotate(60 50 50)'
    >
      <animate
        attributeName='opacity'
        begin='-0.6666666666666666s'
        dur='1s'
        keyTimes='0;1'
        repeatCount='indefinite'
        values='1;0'
      />
    </rect>
    <rect
      width={12}
      height={12}
      x={44}
      y={19}
      rx={8.8}
      ry={3.8}
      transform='rotate(120 50 50)'
    >
      <animate
        attributeName='opacity'
        begin='-0.5s'
        dur='1s'
        keyTimes='0;1'
        repeatCount='indefinite'
        values='1;0'
      />
    </rect>
    <rect
      width={12}
      height={12}
      x={44}
      y={19}
      rx={8.8}
      ry={3.8}
      transform='rotate(180 50 50)'
    >
      <animate
        attributeName='opacity'
        begin='-0.3333333333333333s'
        dur='1s'
        keyTimes='0;1'
        repeatCount='indefinite'
        values='1;0'
      />
    </rect>
    <rect
      width={12}
      height={12}
      x={44}
      y={19}
      rx={8.8}
      ry={3.8}
      transform='rotate(240 50 50)'
    >
      <animate
        attributeName='opacity'
        begin='-0.16666666666666666s'
        dur='1s'
        keyTimes='0;1'
        repeatCount='indefinite'
        values='1;0'
      />
    </rect>
    <rect
      width={12}
      height={12}
      x={44}
      y={19}
      rx={8.8}
      ry={3.8}
      transform='rotate(300 50 50)'
    >
      <animate
        attributeName='opacity'
        begin='0s'
        dur='1s'
        keyTimes='0;1'
        repeatCount='indefinite'
        values='1;0'
      />
    </rect>
  </svg>
);

export default LoaderSVG;