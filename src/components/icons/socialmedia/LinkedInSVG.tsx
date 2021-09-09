import { SVGProps } from 'react';
/**
 * Use a icon SVG like a LinkedIn Link button.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG'
 * <LinkedInSVG height={32} width={32} />
 */
const LinkedInSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label='LinkedIn Button'
    role='button'
    height={24}
    width={24}
    viewBox='-21 -35 682.7 682'
    {...props}
  >
    <title>Ir a mi LinkedIn.</title>
    <path d='M78-1C31-1 0 30 0 71c0 39 30 71 76 71h1c48 0 77-32 77-71-1-41-29-72-76-72zM8 198h137v413H8zm474-9c-74 0-124 69-124 69v-60H221v413h137V381c0-13 1-25 5-34 10-25 32-50 70-50 50 0 70 38 70 93v221h137V374c0-126-68-185-158-185zm0 0' />
  </svg>
);

export default LinkedInSVG;
