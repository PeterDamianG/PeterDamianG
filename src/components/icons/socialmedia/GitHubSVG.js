/** @module Icons/SocialMedia */
/**
 * Use a icon SVG like a Github Link button.
 * @function GitHubSVG
 * @param {object} props - A object, with propieties pass to svg tag.
 * @example
 * import GitHubSVG from 'components/icons/socialmedia/GitHubSVG'
 * <GitHubSVG height={32} width={32} />
 * @returns {JSX.Element} An element of React.
 */
const GitHubSVG = (props) => (
  <svg
    aria-label='GitHub Button'
    role='button'
    height={24}
    width={24}
    viewBox='0 0 512 512'
    {...props}
  >
    <path d='M256 5a257 257 0 00-81 501c13 3 18-5 18-12l-1-44c-71 16-86-34-86-34-12-30-28-38-28-38-24-16 1-16 1-16 26 2 39 27 39 27 23 39 60 28 75 21 2-16 9-28 16-34-57-7-116-29-116-127 0-28 10-51 26-69-3-7-11-33 3-68 0 0 21-7 70 26a244 244 0 01128 0c49-33 70-26 70-26 14 35 6 61 3 68 16 18 26 41 26 69 0 99-60 120-117 127 10 8 18 23 18 47v71c0 7 4 15 17 12A257 257 0 00256 5z' />
  </svg>
);

export default GitHubSVG;
