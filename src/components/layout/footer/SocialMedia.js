import GitHubSVG from 'components/icons/socialmedia/GitHubSVG';
import InstagramSVG from 'components/icons/socialmedia/InstagramSVG';
import LinkedInSVG from 'components/icons/socialmedia/LinkedInSVG';
import { socialmedia } from './socialmedia.module.css';

const SocialMedia = () => (
  <aside className={socialmedia}>
    <GitHubSVG height={12} width={12} />
    <LinkedInSVG height={12} width={12} />
    <InstagramSVG height={12} width={12} />
  </aside>
);

export default SocialMedia;
