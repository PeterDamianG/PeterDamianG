/** @module Layout/Footer */
import GitHubSVG from 'components/icons/socialmedia/GitHubSVG';
import InstagramSVG from 'components/icons/socialmedia/InstagramSVG';
import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG';
import { socialmedia } from './socialmedia.module.css';
/**
 * An container for icons like a links for social medials.
 * @function SocialMedia
 * @example
 * import SocialMedia from 'components/layout/footer/SocialMedia'
 * <SocialMedia />
 * @returns {JSX.Element} An element of React.
 */
const SocialMedia = () => (
  <aside className={socialmedia}>
    <a href='https://github.com/PeterDamianG'>
      <GitHubSVG height={16} width={16} />
    </a>
    <a href='https://www.linkedin.com/in/peterdamiang/'>
      <LinkedInSVG height={16} width={16} />
    </a>
    <a href='https://www.instagram.com/peter.damian.g/'>
      <InstagramSVG height={16} width={16} />
    </a>
  </aside>
);

export default SocialMedia;
