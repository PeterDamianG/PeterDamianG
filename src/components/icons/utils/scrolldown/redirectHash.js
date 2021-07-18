/** @module Icons/Utils */
/**
 * Change path hash on click.
 * @function redirectHash
 * @example
 * import ScollDownSVG from 'components/icons/utils/scrolldown/ScollDownSVG'
 * import redirectHash from 'components/icons/utils/scrolldown/redirectHash'
 * <ScollDownSVG /> // Implicit default.
 * <ScollDownSVG onClick={redirectHash} /> Explicit.
 */
const redirectHash = () => {
  switch (window.location.hash) {
    case '#hero':
      window.location.hash = 'about';
      break;
    case '#about':
      window.location.hash = 'proyects';
      break;
    case '#proyects':
      window.location.hash = 'contact';
      break;
    default:
      window.location.hash = 'hero';
      break;
  }
};

export default redirectHash;
