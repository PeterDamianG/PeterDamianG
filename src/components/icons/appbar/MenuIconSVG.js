/** @module Icons/AppBar */
/**
 * Use a icon to use like a menu button.
 * @function MenuIconSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import MenuIconSVG from 'components/icons/appbar/MenuIconSVG'
 * <MenuIconSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const MenuIconSVG = (props) => (
  <svg
    aria-label='Menu Button'
    role='button'
    height={24}
    width={24}
    {...props}
    viewBox='0 -53 384 384'
  >
    <path d='M368 155H16a16 16 0 010-32h352a16 16 0 010 32zm0-123H16a16 16 0 010-32h352a16 16 0 010 32zm0 245H16a16 16 0 010-32h352a16 16 0 010 32zm0 0' />
  </svg>
);

export default MenuIconSVG;
