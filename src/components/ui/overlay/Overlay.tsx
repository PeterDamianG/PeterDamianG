import {
  useState,
  useEffect,
  useCallback,
  useRef,
  cloneElement,
} from 'react';
import useOverlayHotKeys from './useOverlayHotKeys';
import style from './overlay.module.css';
/**
 * Overlay genérico para menús y modales.
 * Incluye focus trap y restauración de foco al cerrar.
 */
const Overlay = ({
  ChildrenButton,
  ChildrenAside,
}: {
  ChildrenButton: JSX.Element;
  ChildrenAside: JSX.Element;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noScroll');
      // Focus the close button when overlay opens
      const closeBtn = overlayRef.current?.querySelector<HTMLElement>(
        `.${style.closebtn}`,
      );
      closeBtn?.focus();
    } else {
      document.body.classList.remove('noScroll');
    }
  }, [isOpen]);

  // Focus trap: keep Tab cycling within overlay
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab' || !overlayRef.current) return;
      const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return (): void => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const openOverlay = useCallback((): void => setIsOpen(true), []);
  const closeOverlay = useCallback((): void => {
    setIsOpen(false);
    // Restore focus to trigger element
    triggerRef.current?.focus();
  }, []);

  useOverlayHotKeys(closeOverlay, openOverlay);

  return (
    <>
      <button
        ref={triggerRef}
        className={style.overlayShowButton}
        type='button'
        aria-label='Abrir menú de navegación'
        onClick={openOverlay}
      >
        {ChildrenButton}
      </button>
      {isOpen && (
        <aside
          ref={overlayRef}
          className={style.overlay}
          role='dialog'
          aria-modal='true'
          aria-label='Menú de navegación'
        >
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
