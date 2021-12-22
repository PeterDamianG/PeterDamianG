import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import style from './footer.module.css';
/**
 * A footer for app web, with social medial links.
 * @example
 * import Footer from 'layout/footer/Footer'
 * <Footer />
 */
const Footer = (): JSX.Element => (
  <footer className={style.footer}>
    <SocialMedia />
    <small>
      <b>Peter DG</b> {`© ${new Date().getFullYear()}`}
    </small>
  </footer>
);

export default Footer;
