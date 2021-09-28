// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react';
import OverlayHotKeys from './OverlayHotKeys';
import style from './overlay.module.css';
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
        className={style.overlayShowButton}
        type='button'
        onClick={openOverlay}
      >
        {ChildrenButton}
      </button>
      {/* Overlay. */}
      {isOpen && (
        <aside className={style.overlay}>
          <button
            type='button'
            className={style.closebtn}
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
