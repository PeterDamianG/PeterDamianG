/** @module Layout/Footer */
import GitHubSVG from 'components/icons/socialmedia/GitHubSVG';
import GoogleMailSVG from 'components/icons/socialmedia/GoogleMailSVG';
import InstagramSVG from 'components/icons/socialmedia/InstagramSVG';
import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG';
import { socialmedia } from './socialmedia.module.css';
/**
 * An container for icons like a links for social medials.
 * @function SocialMedia
 * @param {{boolean}} props.type - A object with property type - boolean, to set type appbar is true and to set footer is false.
 * @example
 * import SocialMedia from 'components/layout/footer/SocialMedia'
 * <SocialMedia /> // Default for Footer.
 * <SocialMedia type /> // For AppBar
 * @returns {JSX.Element} An element of React.
 */
const SocialMedia = ({ type = false }) => (
  <>
    {type ? (
      <aside className={socialmedia}>
        <a href='https://github.com/PeterDamianG'>
          <GitHubSVG height={16} width={16} />
        </a>
        <a href='mailto:PeterDamianG@Gmail.com'>
          <GoogleMailSVG height={16} width={16} />
        </a>
        <a href='https://www.linkedin.com/in/peterdamiang/'>
          <LinkedInSVG height={16} width={16} />
        </a>
      </aside>
    ) : (
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
    )}
  </>
);

export default SocialMedia;
