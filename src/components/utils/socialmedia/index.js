/** @module Layout/Footer */
import GitHubSVG from 'components/icons/socialmedia/GitHubSVG';
import GoogleMailSVG from 'components/icons/socialmedia/GoogleMailSVG';
import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG';
import { socialmedia } from './socialmedia.module.css';
/**
 * An container for icons like a links for social medias.
 * @function SocialMedia
 * @example
 * import SocialMedia from 'components/layout/footer/SocialMedia'
 * <SocialMedia />
 * @returns {JSX.Element} An element of React.
 */
const SocialMedia = () => (
  <article className={socialmedia}>
    <a href='https://github.com/PeterDamianG'>
      <GitHubSVG height={20} width={20} />
    </a>
    <a href='mailto:PeterDamianG@Gmail.com'>
      <GoogleMailSVG height={20} width={20} />
    </a>
    <a href='https://www.linkedin.com/in/peterdamiang/'>
      <LinkedInSVG height={20} width={20} />
    </a>
  </article>
);

export default SocialMedia;
