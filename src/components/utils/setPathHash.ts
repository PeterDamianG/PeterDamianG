/**
 * A helper function to set location hash checking current location.
 * @param stringHash - A string, to set new location hash.
 * @example
 * import setPathHash from 'components/utils/setPathHash'
 * setPathHash("contact")
 */
const setPathHash = (stringHash: string): void => {
  if (window.history.replaceState) {
    window.history.replaceState(null, '', `#${stringHash}`);
  } else {
    window.location.hash = `#${stringHash}`;
  }
};

export default setPathHash;
