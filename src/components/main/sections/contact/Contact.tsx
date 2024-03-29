import TitleSection from '@components/ui/titlesection/TitleSection';
import ArrowUpSVG from '@components/icons/utils/arrowup/ArrowUpSVG';
import CardSMS from './sms/CardSMS';
import CardSocial from './social/CardSocial';
import style from './arrowup.module.css';
/**
 * A section call contact in the web.
 * @example
 * import Contact from 'main/sections/contact/Contact'
 * <Contact />
 */
const Contact = (): JSX.Element => (
  <>
    <TitleSection>Contacto</TitleSection>
    <CardSMS />
    <CardSocial />
    <h3>Gracias por su consideración.</h3>
    <a href='#hero'>
      <ArrowUpSVG className={style.arrow} />
    </a>
  </>
);

export default Contact;
