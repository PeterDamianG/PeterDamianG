/** @module Layout/AppBar */
import { useMediaQuery } from 'react-responsive';
import SocialMedia from 'components/utils/socialmedia';
import ContentNav1280 from './ContentNav1280';
import { sidenav, closebtn } from './contentnav.module.css';
/**
 * A content of navigation.
 * @function ContentNav
 * @example
 * import ContentNav from 'components/layout/appbar/drawer/ContentNav'
 * <ContentNav close={handleClose} />
 * @returns {JSX.Element} An element of React.
 */
const ContentNav = ({ close }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Show design for 1280 or more.
  if (isDesktopOrLaptop) return <ContentNav1280 close={close} />;
  // Normal design return.
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
