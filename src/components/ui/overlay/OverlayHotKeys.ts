import { useHotkeys } from 'react-hotkeys-hook';

const OverlayHotKeys = (close: Function): void => {
  // Set hotkey escape to close drawer.
  useHotkeys('escape', () => close());
  // Set hotkey to handler move between sections.
  useHotkeys('h', () => {
    window.location.hash = 'hero'; // Go hero section.
    close();
  });
  useHotkeys('a', () => {
    window.location.hash = 'about'; // Go about section.
    close();
  });
  useHotkeys('p', () => {
    window.location.hash = 'proyects'; // Go proyects section.
    close();
  });
  useHotkeys('c', () => {
    window.location.hash = 'contact'; // Go contact section.
    close();
  });
};

export default OverlayHotKeys;
