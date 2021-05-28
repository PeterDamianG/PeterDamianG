import SocialMedia from './SocialMedia';
import Caption from './Caption';
import { footer } from './footer.module.css';

const Footer = () => (
  <footer className={footer}>
    <SocialMedia />
    <Caption />
  </footer>
);

export default Footer;
