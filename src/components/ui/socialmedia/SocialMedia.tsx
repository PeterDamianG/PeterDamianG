import WrapperIcon from '../wrappericon/WrapperIcon';
import GitHubSVG from '@icons/socialmedia/GitHubSVG';
import GoogleMailSVG from '@icons/socialmedia/GoogleMailSVG';
import LinkedInSVG from '@icons/socialmedia/LinkedInSVG';
/**
 * An container for icons like a button links for social media networks.
 * @example
 * import SocialMedia from 'components/ui/socialmedia/SocialMedia'
 * <SocialMedia />
 */
const SocialMedia = (): JSX.Element => (
  <WrapperIcon>
    <a href='https://github.com/PeterDamianG' target='_blank' rel='noreferrer'>
      <GitHubSVG />
    </a>
    <a href='mailto:PeterDamianG@Gmail.com' target='_blank' rel='noreferrer'>
      <GoogleMailSVG />
    </a>
    <a
      href='https://www.linkedin.com/in/peterdamiang/'
      target='_blank'
      rel='noreferrer'
    >
      <LinkedInSVG />
    </a>
  </WrapperIcon>
);

export default SocialMedia;
