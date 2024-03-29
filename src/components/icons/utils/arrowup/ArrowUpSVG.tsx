import { SVGProps } from 'react';
/**
 * Svg img an arrow up to redirect initial section.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import ArrowUpSVG from 'components/icons/utils/arrowup/ArrowUpSVG'
 * <ArrowUpSVG />
 */
const ArrowUpSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg viewBox='0 0 512 512' aria-label='Arrow Up' {...props}>
    <title>Volver al inicio.</title>
    <path d='M477 217L263 3a11 11 0 00-15 0L35 217a11 11 0 008 18h117v267c0 5 5 10 11 10h171c6 0 10-5 10-10V235h117a11 11 0 008-18z' />
  </svg>
);

export default ArrowUpSVG;
