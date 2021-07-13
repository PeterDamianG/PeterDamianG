/** @module Layout/AppBar */
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import ContentNav from './ContentNav';
/**
 * An drawer for contain a menu to navigate.
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
  // Set hotkey to open/close drawer.
  useHotkeys('m', () => setIsOpen((open) => !open));
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
