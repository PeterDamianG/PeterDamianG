import { useEffect, useCallback } from 'react';
/**
 * Hook que registra hotkeys de navegación y cierre para el Overlay.
 * Reemplaza react-hotkeys-hook con addEventListener nativo.
 * @param close - Función para cerrar el overlay (debe ser estable con useCallback)
 * @param open - Función para abrir el overlay (hotkey M)
 * @example
 * import useOverlayHotKeys from 'components/ui/overlay/useOverlayHotKeys'
 * useOverlayHotKeys(closeOverlay, openOverlay);
 */
const useOverlayHotKeys = (close: () => void, open: () => void): void => {
  const handler = useCallback(
    (e: KeyboardEvent): void => {
      switch (e.key.toLowerCase()) {
        case 'm':
          open();
          break;
        case 'escape':
          close();
          break;
        case 'h':
          window.location.hash = 'hero';
          close();
          break;
        case 'a':
          window.location.hash = 'about';
          close();
          break;
        case 'p':
          window.location.hash = 'proyects';
          close();
          break;
        case 'c':
          window.location.hash = 'contact';
          close();
          break;
        default:
          break;
      }
    },
    [close, open],
  );

  useEffect(() => {
    document.addEventListener('keydown', handler);
    return (): void => document.removeEventListener('keydown', handler);
  }, [handler]);
};

export default useOverlayHotKeys;
