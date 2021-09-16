import { useState } from 'react';
import ScrollDownSVG from '@icons/utils/scrolldown/ScrollDownSVG';
import Button from '@components/ui/button/Button';
import { useHotkeys } from 'react-hotkeys-hook';
import Avatar from './avatar/Avatar';
import * as css from './about.module.css';
import CertificationOverlay from './cert/CertificationOverlay';
/**
 * A section call about in the web.
 * @example
 * import About from 'main/sections/about/About'
 * <About />
 */
const About = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  // Handlers.
  const openCert = (): void => setIsOpen(true);
  const closeCert = (): void => setIsOpen(false);
  // Set hotkey escape to close overlay.
  useHotkeys('escape', () => closeCert());
  // Render.
  return (
    <>
      <h2 className={css['title']}>Sobre Mí</h2>
      <Avatar />
      <article className={css['content']}>
        <p>
          ¡Hola! <b>¿Quién soy?</b> Soy un apasionado por la{' '}
          <b>tecnología, juegos y programación.</b>
        </p>
        <p>
          Estoy interesado en formarme constantemente y mejorar día a día. Aquí
          puedes observar algunas de mis
          {/* Button Cert to show overlay. */}
          <button
            className={css['certificationButton']}
            type='button'
            onClick={openCert}
            title='Mostrar listado de certificados.'
          >
            certificaciones
          </button>
          .
        </p>
        <p>
          Puedes obtener un <b>RESUME o CV</b> de mí persona, en el siguiente
          botón:
        </p>
      </article>
      <a
        href='/profile/cv.pdf'
        target='_blank'
        rel='noreferrer'
        className={css['resumeButton']}
      >
        <Button title='Curriculum Vitae o Resume'>Resume</Button>
      </a>
      <a href='#proyects'>
        <ScrollDownSVG />
      </a>
      {/* Show Overlay Certifications */}
      {isOpen && <CertificationOverlay close={closeCert} />}
    </>
  );
};

export default About;
