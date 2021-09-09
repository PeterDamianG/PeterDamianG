import { SVGProps } from 'react';
/**
 * Use a icon with shape of moon in svg to make a dark theme button.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import DarkIconSVG from 'components/icons/appbar/DarkIconSVG'
 * <DarkIconSVG height={32} width={32} />
 */
const DarkIconSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label='Dark Button'
    role='button'
    height={24}
    width={24}
    viewBox='-12 0 500 500'
    {...props}
  >
    <title>Cambiar a tema oscuro o presiona la tecla T.</title>
    <path d='M224 448c86 1 164-48 200-126-23 10-47 15-72 14A176 176 0 01271 3c-16-2-31-3-47-3a224 224 0 100 448zm0 0' />
  </svg>
);

export default DarkIconSVG;
