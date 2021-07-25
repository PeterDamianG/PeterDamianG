/** @module Layout/AppBar */
import { useState } from 'react';
import useFunction from 'hooks/useFunction';
import SocialMedia from 'components/utils/socialmedia';
import textContent from './textContent';
import {
  sidenav,
  closebtn,
  hero,
  about,
  proyects,
  contact,
  detail,
  textContentStyle,
  active,
} from './contentnav.module.css';
/**
 * A content of navigation when you have in 1280 or more of resolution width.
 * @function ContentNav
 * @param {Function} props.close - Function to close nav drawer.
 * @example
 * import ContentNav from 'components/layout/appbar/drawer/ContentNav1280'
 * <ContentNav1280 close={handleClose} />
 */
const ContentNav1280 = ({ close }) => {
  // State for show/change textContent.
  const [number, setNumber] = useState(0);
  // Handler click on TextContent
  const handlerClickText = () => {
    if (number === textContent.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Hook to change states automatic.
  useFunction(handlerClickText, 10000);
  return (
    <nav className={sidenav}>
      <button
        data-tip='Cierra el menú de navegación.'
        type='button'
        className={closebtn}
        onClick={close}
      >
        X
      </button>
      <article className={hero}>
        <a
          data-tip='Presiona H, para acceder rápidamente a esa sección.'
          href='#hero'
          onClick={close}
          className={window.location.href === 'hero' ? active : ''}
          style={
            window.location.hash === '#hero'
              ? {
                  textDecoration: 'underline',
                }
              : {}
          }
        >
          Inicio
        </a>
        <p>Inicio de la web, donde les comparto algunos pensamientos.</p>
      </article>
      <article className={about}>
        <a
          data-tip='Presiona A, para acceder rápidamente a esa sección.'
          href='#about'
          onClick={close}
          className={window.location.href === 'about' ? active : ''}
          style={
            window.location.hash === '#about'
              ? {
                  textDecoration: 'underline',
                }
              : {}
          }
        >
          Sobre Mí
        </a>
        <p>Conoceme más. Algunos detalles más de mí persona.</p>
      </article>
      <article className={proyects}>
        <a
          data-tip='Presiona P, para acceder rápidamente a esa sección.'
          href='#proyects'
          onClick={close}
          className={window.location.href === 'proyects' ? active : ''}
          style={
            window.location.hash === '#proyects'
              ? {
                  textDecoration: 'underline',
                }
              : {}
          }
        >
          Proyectos
        </a>
        <p>Los proyectos que he llevado a cabo. No todos ellos.</p>
      </article>
      <article className={contact}>
        <a
          data-tip='Presiona C, para acceder rápidamente a esa sección.'
          href='#contact'
          onClick={close}
          className={window.location.href === 'contact' ? active : ''}
          style={
            window.location.hash === '#contact'
              ? {
                  textDecoration: 'underline',
                }
              : {}
          }
        >
          Contacto
        </a>
        <p>Sí estás interesado en contactarme, aquí las mejores opciones.</p>
      </article>
      <article className={detail}>
        <h3>Peter DG</h3>
        <SocialMedia />
        <p
          className={textContentStyle}
          onClick={handlerClickText}
          aria-hidden='true'
        >
          {textContent[number]}
        </p>
        <small>© {new Date().getFullYear()} Peter DG.</small>
      </article>
    </nav>
  );
};

export default ContentNav1280;
