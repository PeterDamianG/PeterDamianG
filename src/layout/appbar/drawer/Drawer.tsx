import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import ContentNav from './nav/ContentNav';
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
  });
  useHotkeys('a', () => {
    window.location.hash = 'about'; // Go about section.
  });
  useHotkeys('p', () => {
    window.location.hash = 'proyects'; // Go proyects section.
  });
  useHotkeys('c', () => {
    window.location.hash = 'contact'; // Go contact section.
  });
  // Render Component
  return (
    <>
      {/* SVG Button to open Drawer */}
      <MenuIconSVG onClick={openDrawer} />
      {/* Show Drawer */}
      {isOpen && <ContentNav close={closeDrawer} />}
    </>
  );
};

export default Drawer;
