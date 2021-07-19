/** @module Sections/Contact */
import SocialMedia from 'components/utils/socialmedia';
import { sectionStyle, asideStyle } from './contact.module.css';
/**
 * A section call contact in the web.
 * @function Contact
 * @example
 * import Contact from 'components/main/sections/contact'
 * <Contact />
 * @returns {JSX.Element} An element of React.
 */
const Contact = () => (
  <section id='contact' className={sectionStyle}>
    <h2>Contacto</h2>
    <article className={asideStyle}>
      <h3>¿Y ahora, qué?</h3>
      <p>
        ¿Quiéres contactarme?, ¡Puedes a través de redes sociales o correo
        electrónico!
      </p>
      <SocialMedia />
    </article>
    <aside className={asideStyle}>
      <h3>¿Necesitas un CV o Resume?</h3>
      <a href='https://www.peterdg.com.ar/cv.pdf'>
        <button data-tip='Curriculum Vitae' type='button'>
          Resume
        </button>
      </a>
    </aside>
    <h4>Gracias por su consideración.</h4>
  </section>
);

export default Contact;
