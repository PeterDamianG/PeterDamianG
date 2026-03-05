import { useEffect, useRef } from 'react';
import useTheme from '@hooks/useTheme';
import LightIconSVG from '@icons/appbar/LightIconSVG';
import DarkIconSVG from '@icons/appbar/DarkIconSVG';
/**
 * Botón para cambiar entre temas claro y oscuro. Hotkey: tecla T.
 * @example
 * import ThemeChanger from 'layout/appbar/themechanger/ThemeChanger'
 * <ThemeChanger />
 */
const ThemeChanger = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  const handlerSetTheme = (): void =>
    setTheme(themeRef.current === 'light' ? 'dark' : 'light');

  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      if (e.key === 't' || e.key === 'T')
        setTheme(themeRef.current === 'light' ? 'dark' : 'light');
    };
    document.addEventListener('keydown', handler);
    return (): void => document.removeEventListener('keydown', handler);
  }, [setTheme]); // setTheme es estable (useCallback en useTheme)

  if (theme === 'light') return <DarkIconSVG onClick={handlerSetTheme} />;
  return <LightIconSVG onClick={handlerSetTheme} />;
};

export default ThemeChanger;
