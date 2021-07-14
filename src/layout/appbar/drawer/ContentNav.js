/** @module Layout/AppBar */
import { useMediaQuery } from 'react-responsive';
import SocialMedia from 'components/utils/socialmedia';
import {
  sidenav,
  closebtn,
  hero,
  about,
  proyects,
  contact,
  detail,
} from './contentnav.module.css';
/**
 * A content of navigation.
 * @function ContentNav
 * @example
 * import ContentNav from 'components/layout/appbar/drawer/ContentNav'
 * <ContentNav close={handleClose} />
 * @returns {JSX.Element} An element of React.
 */
const ContentNav = ({ close }) => {
  // Other design with full media.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  if (isDesktopOrLaptop) {
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
          >
            Contacto
          </a>
          <p>Sí estás interesado en contactarme, aquí las mejores opciones.</p>
        </article>
        <article className={detail}>
          <h3>Peter DG</h3>
          <SocialMedia />
          <p>No olvides de adaptarte a tú resolución preferida.</p>
          <small>© {new Date().getFullYear()} Peter DG.</small>
        </article>
      </nav>
    );
  }
  return (
    <nav className={sidenav}>
      <button type='button' className={closebtn} onClick={close}>
        X
      </button>
      <a
        data-tip='Presiona H, para acceder rápidamente a esa sección.'
        href='#hero'
        onClick={close}
      >
        Inicio
      </a>
      <a
        data-tip='Presiona A, para acceder rápidamente a esa sección.'
        href='#about'
        onClick={close}
      >
        Sobre Mí
      </a>
      <a
        data-tip='Presiona P, para acceder rápidamente a esa sección.'
        href='#proyects'
        onClick={close}
      >
        Proyectos
      </a>
      <a
        data-tip='Presiona C, para acceder rápidamente a esa sección.'
        href='#contact'
        onClick={close}
      >
        Contacto
      </a>
      <SocialMedia />
      <small>© {new Date().getFullYear()} Peter DG.</small>
    </nav>
  );
};

export default ContentNav;
