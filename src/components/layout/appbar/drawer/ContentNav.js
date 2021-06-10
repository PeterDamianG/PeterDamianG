/** @module Layout/AppBar */
import SocialMedia from 'components/utils/socialmedia';
import { sidenav, closebtn } from './contentnav.module.css';
/**
 * An drawer for contain a menu to navigate.
 * @function Drawer
 * @example
 * import Drawer from 'components/layout/appbar/Drawer'
 * <AppBar />
 * @returns {JSX.Element} An element of React.
 */
const Drawer = ({ close }) => (
  <nav className={sidenav}>
    <button type='button' className={closebtn} onClick={close}>
      X
    </button>
    <a href='#hero' onClick={close}>
      Principal
    </a>
    <a href='#about' onClick={close}>
      Sobre Mí
    </a>
    <a href='#proyects' onClick={close}>
      Proyectos
    </a>
    <a href='#contact' onClick={close}>
      Contacto
    </a>
    <SocialMedia />
    <small>© {new Date().getFullYear()} Peter DG.</small>
  </nav>
);

export default Drawer;
