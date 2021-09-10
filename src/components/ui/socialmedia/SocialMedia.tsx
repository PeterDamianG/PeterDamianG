import GitHubSVG from '@icons/socialmedia/GitHubSVG';
import GoogleMailSVG from '@icons/socialmedia/GoogleMailSVG';
import LinkedInSVG from '@icons/socialmedia/LinkedInSVG';
import * as css from './socialmedia.module.css';
/**
 * An container for icons like a button links for social media networks.
 * @example
 * import SocialMedia from 'components/ui/socialmedia/SocialMedia'
 * <SocialMedia />
 */
const SocialMedia = (): JSX.Element => (
  <article className={css['socialmedia']}>
    <a href='https://github.com/PeterDamianG' target='_blank' rel='noreferrer'>
      <GitHubSVG height={20} width={20} />
    </a>
    <a href='mailto:PeterDamianG@Gmail.com' target='_blank' rel='noreferrer'>
      <GoogleMailSVG height={20} width={20} />
    </a>
    <a
      href='https://www.linkedin.com/in/peterdamiang/'
      target='_blank'
      rel='noreferrer'
    >
      <LinkedInSVG height={20} width={20} />
    </a>
  </article>
);

export default SocialMedia;
