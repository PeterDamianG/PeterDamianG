import GitHubSVG from 'components/icons/socialmedia/GitHubSVG';
import InstagramSVG from 'components/icons/socialmedia/InstagramSVG';
import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG';
import { section } from './socialmedia.module.css';

const SocialMedia = () => (
  <section className={section}>
    <GitHubSVG height={12} width={12} />
    <LinkedInSVG height={12} width={12} />
    <InstagramSVG height={12} width={12} />
  </section>
);

export default SocialMedia;
