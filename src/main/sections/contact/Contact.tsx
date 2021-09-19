import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import ArrowUpSVG from '@components/icons/utils/arrowup/ArrowUpSVG';
import TitleSection from '@components/ui/titlesection/TitleSection';
/**
 * A section call contact in the web.
 * @example
 * import Contact from 'main/sections/contact/Contact'
 * <Contact />
 */
const Contact = (): JSX.Element => (
  <>
    <TitleSection value='Contacto' />
    <article>
      <h3>¿Y ahora, qué?</h3>
      <p>
        ¿Quiéres contactarme?, ¡Puedes a través de redes sociales o correo
        electrónico!
      </p>
      <SocialMedia />
    </article>
    <h4>Gracias por su consideración.</h4>
    <a href='#hero'>
      <ArrowUpSVG width='32px' height='32px' />
    </a>
  </>
);

export default Contact;
