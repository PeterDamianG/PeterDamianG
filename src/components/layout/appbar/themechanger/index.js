/** @module Layout/AppBar */
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LightIconSVG from 'components/icons/appbar/LightIconSVG';
import DarkIconSVG from 'components/icons/appbar/DarkIconSVG';
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
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  // Handler
  const handlerSetTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');
  // If not is mounted yet.
  if (!mounted) return null;
  // If is set to light.
  if (theme === 'light') return <DarkIconSVG onClick={handlerSetTheme} />;
  // If is set to dark.
  return <LightIconSVG onClick={handlerSetTheme} />;
};

export default ThemeChanger;
