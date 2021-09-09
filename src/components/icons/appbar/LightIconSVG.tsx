import { SVGProps } from 'react';
/**
 * Use a icon with shape of sun in svg to make a light theme button.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import LightIconSVG from 'components/icons/appbar/LightIconSVG'
 * <LightIconSVG height={32} width={32} />
 */
const LightIconSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label='Light Button'
    role='button'
    height={24}
    width={24}
    viewBox='0 0 612 612'
    {...props}
  >
    <title>Cambiar a tema claro o presiona la tecla T.</title>
    <path d='M130 157a19 19 0 1027-27l-40-40a19 19 0 10-27 27l40 40zm12 287l-40 40a19 19 0 1026 26l41-40a19 19 0 10-27-26zM306 96c11 0 19-9 19-19V19a19 19 0 00-38 0v58c0 10 8 19 19 19zm184 53l40-40a19 19 0 10-27-27l-40 40a19 19 0 1027 27zM77 287H19a19 19 0 000 38h58a19 19 0 000-38zm229 229c-11 0-19 9-19 20v57a19 19 0 0038 0v-57c0-11-8-20-19-20zm287-229h-57a19 19 0 000 38h57a19 19 0 000-38zM482 455a19 19 0 10-27 27l40 40a19 19 0 1027-27l-40-40zM306 134a172 172 0 100 344 172 172 0 000-344z' />
  </svg>
);

export default LightIconSVG;
