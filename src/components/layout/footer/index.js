/** @module Layout/Footer */
import SocialMedia from './SocialMedia';
import { footer } from './footer.module.css';
/**
 * An footer for app web, with social medial links.
 * @function Footer
 * @example
 * import Footer from 'components/layout/footer'
 * <Footer />
 * @returns {JSX.Element} An element of React.
 */
const Footer = () => (
  <footer className={footer}>
    <SocialMedia />
    <small>
      {`Copyright © ${new Date().getFullYear()}. All rights reserved. `}
      Site By <b>Peter Damian G.</b>
    </small>
  </footer>
);

export default Footer;
