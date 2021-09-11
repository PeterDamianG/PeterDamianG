import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import ContainerNav from './ContainerNav';
/**
 * An drawer for contain a menu to navigate.
 * @example
 * import Drawer from 'layout/appbar/drawer/Drawer'
 * <AppBar />
 */
const Drawer = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  // Handlers
  const openDrawer = (): void => setIsOpen(true);
  const closeDrawer = (): void => setIsOpen(false);
  /*
   ** All Hotkeys for Drawer
   */
  // Set hotkey to open/close drawer.
  useHotkeys('m', () => setIsOpen((open) => !open));
  // Set hotkey to handler move between sections.
  useHotkeys('h', () => {
    window.location.hash = 'hero'; // Go hero section.
    closeDrawer();
  });
  useHotkeys('a', () => {
    window.location.hash = 'about'; // Go about section.
    closeDrawer();
  });
  useHotkeys('p', () => {
    window.location.hash = 'proyects'; // Go proyects section.
    closeDrawer();
  });
  useHotkeys('c', () => {
    window.location.hash = 'contact'; // Go contact section.
    closeDrawer();
  });
  // Render Component
  return (
    <>
      {/* SVG Button to open Drawer */}
      <MenuIconSVG onClick={openDrawer} />
      {/* Show Drawer */}
      {isOpen && <ContainerNav close={closeDrawer} />}
    </>
  );
};

export default Drawer;
