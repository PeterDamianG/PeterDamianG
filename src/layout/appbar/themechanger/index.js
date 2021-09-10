/** @module Layout/AppBar */
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LightIconSVG from 'components/icons/appbar/LightIconSVG';
import DarkIconSVG from 'components/icons/appbar/DarkIconSVG';
import { useHotkeys } from 'react-hotkeys-hook';
/**
 * An button to change between themes light and dark.
 * @function ThemeChanger
 * @example
 * import ThemeChanger from 'components/layout/appbar/themechanger'
 * <ThemeChanger />
 * @returns {JSX.Element} An element of React.
 */
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI.
  useEffect(() => setMounted(true), []);
  // Handler
  const handlerSetTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');
  // Set hotkey to change theme.
  useHotkeys('t', handlerSetTheme, {}, [theme]);
  // If not is mounted yet.
  if (!mounted) return null;
  // If is set to light.
  if (theme === 'light')
    return (
      <DarkIconSVG
        data-tip='Cambiar a Dark Theme o presiona T.'
        onClick={handlerSetTheme}
      />
    );
  // If is set to dark.
  return (
    <LightIconSVG
      data-tip='Cambiar a Light Theme o presiona T.'
      onClick={handlerSetTheme}
    />
  );
};

export default ThemeChanger;
