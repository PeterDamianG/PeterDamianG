import TitleSection from '@components/ui/titlesection/TitleSection';
import CardSMS from './sms/CardSMS';
import CardSocial from './social/CardSocial';
import ArrowUpSVG from '@components/icons/utils/arrowup/ArrowUpSVG';
/**
 * A section call contact in the web.
 * @example
 * import Contact from 'main/sections/contact/Contact'
 * <Contact />
 */
const Contact = (): JSX.Element => (
  <>
    <TitleSection value='Contacto' />
    <CardSocial />
    <CardSMS />
    <h3>Gracias por su consideración.</h3>
    <a href='#hero'>
      <ArrowUpSVG />
    </a>
  </>
);

export default Contact;
