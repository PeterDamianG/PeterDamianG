import { useState, useEffect } from 'react';

/**
 * Hook que devuelve si una media query CSS coincide.
 * Reemplaza react-responsive usando la API nativa window.matchMedia.
 * @param query - Media query CSS, ej: '(min-width: 768px)'
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent): void => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return (): void => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

export default useMediaQuery;
