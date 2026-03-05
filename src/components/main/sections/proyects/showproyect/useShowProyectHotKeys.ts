import { useEffect, useCallback } from 'react';
/**
 * Hook que registra hotkeys de navegación para el carrusel de proyectos.
 * Reemplaza react-hotkeys-hook con addEventListener nativo.
 * @param upIndex - Función para ir al siguiente proyecto
 * @param downIndex - Función para ir al proyecto anterior
 * @example
 * import useShowProyectHotKeys from 'main/sections/proyects/showproyect/useShowProyectHotKeys'
 * useShowProyectHotKeys(handleUpIndex, handleDownIndex);
 */
const useShowProyectHotKeys = (
  upIndex: () => void,
  downIndex: () => void,
): void => {
  const handler = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'ArrowRight') upIndex();
      if (e.key === 'ArrowLeft') downIndex();
    },
    [upIndex, downIndex],
  );

  useEffect(() => {
    document.addEventListener('keydown', handler);
    return (): void => document.removeEventListener('keydown', handler);
  }, [handler]);
};

export default useShowProyectHotKeys;
