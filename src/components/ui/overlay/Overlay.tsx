import React, { useState, useEffect } from 'react';
import OverlayHotKeys from './OverlayHotKeys';
import * as css from './overlay.module.css';
/**
 * Generic overlay from multiple proposes.
 * @example
 * import Overlay from 'components/ui/overlay/Overlay'
 * <Overlay
 *    ChildrenButton={
 *      <u>
 *         <em>
 *           <b>certificaciones.</b>
 *         </em>
 *      </u>
 *     }
 *     ChildrenAside={<ListCertification />}
 * />
 */
const Overlay = ({
  ChildrenButton,
  ChildrenAside,
}: {
  ChildrenButton: JSX.Element;
  ChildrenAside: JSX.Element;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  // Effect to remove scroll in HTML document.
  useEffect(() => {
    if (isOpen) document.body.classList.add('noScroll');
    else document.body.classList.remove('noScroll');
  }, [isOpen]);
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
          {/* Use React Clone, to pass params to children. */}
          {React.cloneElement(ChildrenAside, { close: closeOverlay })}
        </aside>
      )}
    </>
  );
};

export default Overlay;
