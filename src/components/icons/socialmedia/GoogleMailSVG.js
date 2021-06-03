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
    aria-label='GoogleMail Button'
    role='button'
    height={24}
    width={24}
    {...props}
  >
    <path d='M148 174a136 136 0 01204-14l11 10 85-84-11-11A254 254 0 0062 89zm275 276l14-13a254 254 0 0071-227l-2-13H241v120h136c-9 19-22 35-39 47zm-111-70a136 136 0 01-164-42l-86 85 13 14a254 254 0 00324 31zm-180-68a135 135 0 010-112l-88-87a254 254 0 000 286z' />
  </svg>
);

export default GoogleMailSVG;
