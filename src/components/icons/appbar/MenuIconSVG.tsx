import { SVGProps } from 'react';
/**
 * Use a icon SVG like a menu button.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import MenuIconSVG from 'components/icons/appbar/MenuIconSVG'
 * <MenuIconSVG height={32} width={32} />
 */
const MenuIconSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label='Menu Button'
    role='button'
    height={24}
    width={24}
    {...props}
    viewBox='0 -53 384 384'
  >
    <title>Abrir/Cerrar el menú de navegación o presiona la tecla M.</title>
    <path d='M368 155H16a16 16 0 010-32h352a16 16 0 010 32zm0-123H16a16 16 0 010-32h352a16 16 0 010 32zm0 245H16a16 16 0 010-32h352a16 16 0 010 32zm0 0' />
  </svg>
);

export default MenuIconSVG;
