import { useState, useEffect, useCallback, cloneElement } from 'react';
import useOverlayHotKeys from './useOverlayHotKeys';
import style from './overlay.module.css';
/**
 * Overlay genérico para menús y modales.
 * @example
 * import Overlay from 'components/ui/overlay/Overlay'
 * <Overlay
 *    ChildrenButton={ <button>certificaciones.</button> }
 *    ChildrenAside={ <ListCertification /> }
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

  useEffect(() => {
    if (isOpen) document.body.classList.add('noScroll');
    else document.body.classList.remove('noScroll');
  }, [isOpen]);

  const openOverlay = useCallback((): void => setIsOpen(true), []);
  // useCallback para estabilizar la referencia y evitar re-registro de listeners
  const closeOverlay = useCallback((): void => setIsOpen(false), []);

  useOverlayHotKeys(closeOverlay, openOverlay);

  return (
    <>
      <button
        className={style.overlayShowButton}
        type='button'
        aria-label='Abrir menú de navegación'
        onClick={openOverlay}
      >
        {ChildrenButton}
      </button>
      {isOpen && (
        <aside className={style.overlay} role='dialog' aria-modal='true' aria-label='Menú de navegación'>
          <button
            type='button'
            className={style.closebtn}
            aria-label='Cerrar menú'
            onClick={closeOverlay}
          >
            ×
          </button>
          {cloneElement(ChildrenAside, { close: closeOverlay })}
        </aside>
      )}
    </>
  );
};

export default Overlay;
