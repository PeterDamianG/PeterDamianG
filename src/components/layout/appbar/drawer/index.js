/** @module Layout/AppBar */
import { useState } from 'react';
import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import { sidenav, closebtn } from './drawer.module.css';
/**
 * An drawer for menu to navigate.
 * @function Drawer
 * @example
 * import Drawer from 'components/layout/appbar/Drawer'
 * <AppBar />
 * @returns {JSX.Element} An element of React.
 */
const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Handlers
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  // Render Component
  return (
    <>
      {/* SVG Button to open Drawer */}
      <MenuIconSVG onClick={openDrawer} />
      {/* Show Drawer */}
      {isOpen && (
        <nav className={sidenav}>
          <a
            href={window.location.hash ? window.location.hash : '#hero'}
            className={closebtn}
            onClick={closeDrawer}
          >
            Back
          </a>
          <a href='#hero' onClick={closeDrawer}>
            Principal
          </a>
          <a href='#about' onClick={closeDrawer}>
            Sobre Mí
          </a>
          <a href='#proyects' onClick={closeDrawer}>
            Proyectos
          </a>
          <a href='#contact' onClick={closeDrawer}>
            Contacto
          </a>
        </nav>
      )}
    </>
  );
};

export default Drawer;
