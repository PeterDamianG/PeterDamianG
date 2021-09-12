import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import * as css from './contentnav.module.css';
/**
 * A content of navigation when you have in 1280 less of resolution width.
 * @param props.close - Function to close nav drawer.
 * @example
 * import ContentNav from 'layout/appbar/drawer/nav/ContentNav'
 * <ContentNav close={handleClose} />
 */
const ContentNav = ({ close }: { close: Function }): JSX.Element => (
  <nav className={css['sidenav']}>
    <button
      type='button'
      className={css['closebtn']}
      onClick={(): Function => close()}
    >
      ×
    </button>
    <a
      title='Presiona H, para acceder rápidamente a esa sección.'
      href='#hero'
      onClick={(): Function => close()}
    >
      Inicio
    </a>
    <a
      title='Presiona A, para acceder rápidamente a esa sección.'
      href='#about'
      onClick={(): Function => close()}
    >
      Sobre Mí
    </a>
    <a
      title='Presiona P, para acceder rápidamente a esa sección.'
      href='#proyects'
      onClick={(): Function => close()}
    >
      Proyectos
    </a>
    <a
      title='Presiona C, para acceder rápidamente a esa sección.'
      href='#contact'
      onClick={(): Function => close()}
    >
      Contacto
    </a>
    <SocialMedia />
    <small>© {new Date().getFullYear()} Peter DG.</small>
  </nav>
);

export default ContentNav;
