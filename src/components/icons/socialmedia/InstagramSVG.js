/** @module Icons/SocialMedia */
/**
 * Use a icon to use like a Instagram Link button.
 * @function InstagramSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import InstagramSVG from 'components/icons/socialmedia/InstagramSVG'
 * <InstagramSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const InstagramSVG = (props) => (
  <svg
    aria-label='Instagram Button'
    role='button'
    height={24}
    width={24}
    viewBox='0 0 169 169'
    {...props}
  >
    <path d='M122 0H47C21 0 0 21 0 47v75c0 26 21 47 47 47h75c26 0 47-21 47-47V47c0-26-21-47-47-47zm32 122c0 18-14 32-32 32H47c-18 0-32-14-32-32V47c0-18 14-32 32-32h75c18 0 32 14 32 32v75z' />
    <path d='M85 41a44 44 0 100 87 44 44 0 000-87zm0 72a29 29 0 110-57 29 29 0 010 57zm45-85a11 11 0 00-11 11 11 11 0 0011 11c3 0 6-1 8-3a11 11 0 000-16c-2-2-5-3-8-3z' />
  </svg>
);

export default InstagramSVG;
