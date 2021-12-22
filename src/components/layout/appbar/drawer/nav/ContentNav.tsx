import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import style from './contentnav.module.css';
/**
 * A content of navigation when you have in 1280 less of resolution width.
 * @example
 * import ContentNav from 'layout/appbar/drawer/nav/ContentNav'
 * <ContentNav />
 */
const ContentNav = ({
  close = (): Function | null => null,
}: {
  close?: Function;
}): JSX.Element => (
  <nav className={style.sidenav}>
    <a
      title='Presiona H, para acceder rápidamente a esa sección.'
      href='#hero'
      onClick={(): void => close()}
    >
      Inicio
    </a>
    <a
      title='Presiona A, para acceder rápidamente a esa sección.'
      href='#about'
      onClick={(): void => close()}
    >
      Sobre Mí
    </a>
    <a
      title='Presiona P, para acceder rápidamente a esa sección.'
      href='#proyects'
      onClick={(): void => close()}
    >
      Proyectos
    </a>
    <a
      title='Presiona C, para acceder rápidamente a esa sección.'
      href='#contact'
      onClick={(): void => close()}
    >
      Contacto
    </a>
    <SocialMedia />
    <small>© {new Date().getFullYear()} Peter DG.</small>
  </nav>
);

export default ContentNav;
