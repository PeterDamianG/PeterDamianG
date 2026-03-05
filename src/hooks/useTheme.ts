import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Hook para manejar el tema claro/oscuro.
 * Lee y persiste en localStorage, aplica el atributo data-theme en <html>.
 * Reemplaza next-themes.
 */
const useTheme = (): { theme: Theme; setTheme: (t: Theme) => void } => {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'light',
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((t: Theme): void => setThemeState(t), []);

  return { theme, setTheme };
};

export default useTheme;
