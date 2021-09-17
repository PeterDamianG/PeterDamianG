import React, { useState } from 'react';
import OverlayHotKeys from './OverlayHotKeys';
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
  // Set HotKeys.
  OverlayHotKeys(closeOverlay);
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
          {React.cloneElement(ChildrenAside, { close: closeOverlay })}
        </aside>
      )}
    </>
  );
};

export default Overlay;
