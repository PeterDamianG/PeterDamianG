/** @module Icons/SocialMedia */
/**
 * Use a icon SVG like a Google Mail Icon.
 * @function GoogleMailSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import GoogleMailSVG from 'components/icons/socialmedia/GoogleMailSVG'
 * <GoogleMailSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const GoogleMailSVG = (props) => (
  <svg
    data-tip='Enviarme un Mail.'
    aria-label='GoogleMail Button'
    role='button'
    height={24}
    width={24}
    viewBox='0 0 512 512'
    {...props}
  >
    <path d='M512 256c0-16-2-32-4-48-2-7-8-12-15-12H257c-8 0-15 7-15 15v90c0 8 7 15 15 15h121c-8 15-18 28-30 40l85 84c48-46 79-111 79-184zM256 120c29 0 57 9 81 27 6 5 14 4 20-1l64-64a15 15 0 00-1-22 255 255 0 00-375 52l88 89c21-48 68-81 123-81zm0 392c57 0 110-19 153-51l-87-87a135 135 0 01-189-62l-88 88c46 67 123 112 211 112zM122 278l-2-22 2-22-94-94a253 253 0 000 232z' />
  </svg>
);

export default GoogleMailSVG;
