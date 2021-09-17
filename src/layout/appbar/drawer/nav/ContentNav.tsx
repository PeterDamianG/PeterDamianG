import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import * as css from './contentnav.module.css';
/**
 * A content of navigation when you have in 1280 less of resolution width.
 * @example
 * import ContentNav from 'layout/appbar/drawer/nav/ContentNav'
 * <ContentNav />
 */
const ContentNav = (): JSX.Element => (
  <nav className={css['sidenav']}>
    <a title='Presiona H, para acceder rápidamente a esa sección.' href='#hero'>
      Inicio
    </a>
    <a
      title='Presiona A, para acceder rápidamente a esa sección.'
      href='#about'
    >
      Sobre Mí
    </a>
    <a
      title='Presiona P, para acceder rápidamente a esa sección.'
      href='#proyects'
    >
      Proyectos
    </a>
    <a
      title='Presiona C, para acceder rápidamente a esa sección.'
      href='#contact'
    >
      Contacto
    </a>
    <SocialMedia />
    <small>© {new Date().getFullYear()} Peter DG.</small>
  </nav>
);

export default ContentNav;
