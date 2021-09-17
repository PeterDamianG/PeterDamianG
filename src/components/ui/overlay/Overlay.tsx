import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import * as css from './overlay.module.css';
/**
 * Generic overlay from multiple proposes.
 * @example
 * import Overlay from 'components/ui/overlay/Overlay'
 * <Overlay />
 */
const Overlay = ({
  ChildrenButton,
  ChildrenAside,
}: {
  ChildrenButton: JSX.Element;
  ChildrenAside: JSX.Element;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  // Handlers.
  const openOverlay = (): void => setIsOpen(true);
  const closeOverlay = (): void => setIsOpen(false);
  /*
   ** All Hotkeys for Overlay
   */
  // Set hotkey to open/close drawer.
  useHotkeys('m', () => setIsOpen((open) => !open));
  // Set hotkey escape to close drawer.
  useHotkeys('escape', () => closeOverlay());
  // Set hotkey to handler move between sections.
  useHotkeys('h', () => {
    window.location.hash = 'hero'; // Go hero section.
    closeOverlay();
  });
  useHotkeys('a', () => {
    window.location.hash = 'about'; // Go about section.
    closeOverlay();
  });
  useHotkeys('p', () => {
    window.location.hash = 'proyects'; // Go proyects section.
    closeOverlay();
  });
  useHotkeys('c', () => {
    window.location.hash = 'contact'; // Go contact section.
    closeOverlay();
  });
  // Render.
  return (
    <>
      {/* Button show overlay. */}
      <button
        className={css['overlayShowButton']}
        type='button'
        onClick={openOverlay}
        title='Mostrar listado de certificados.'
      >
        {ChildrenButton}
      </button>
      {/* Overlay. */}
      {isOpen && (
        <aside className={css['overlay']}>
          <button
            type='button'
            className={css['closebtn']}
            onClick={closeOverlay}
          >
            ×
          </button>
          {ChildrenAside}
        </aside>
      )}
    </>
  );
};

export default Overlay;
