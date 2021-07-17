/** @module Layout/AppBar */
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
 * A content of navigation when you have in 1280 or more of resolution width.
 * @function ContentNav
 * @param {Function} props.close - Function to close nav drawer.
 * @example
 * import ContentNav from 'components/layout/appbar/drawer/ContentNav1280'
 * <ContentNav1280 close={handleClose} />
 */
const ContentNav1280 = ({ close }) => (
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

export default ContentNav1280;
