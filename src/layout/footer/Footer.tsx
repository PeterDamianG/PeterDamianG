import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import * as css from './footer.module.css';
/**
 * A footer for app web, with social medial links.
 * @example
 * import Footer from 'components/layout/footer/Footer'
 * <Footer />
 */
const Footer = (): JSX.Element => (
  <footer className={css['footer']}>
    <SocialMedia />
    <small>
      <b>Peter DG</b> {`© ${new Date().getFullYear()}`}
    </small>
  </footer>
);

export default Footer;
