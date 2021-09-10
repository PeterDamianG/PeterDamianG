import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LightIconSVG from 'components/icons/appbar/LightIconSVG';
import DarkIconSVG from 'components/icons/appbar/DarkIconSVG';
import { useHotkeys } from 'react-hotkeys-hook';
/**
 * An button to change between themes light and dark.
 * @example
 * import ThemeChanger from 'layout/appbar/themechanger/ThemeChanger'
 * <ThemeChanger />
 */
const ThemeChanger = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI.
  useEffect(() => setMounted(true), []);
  // Handler
  const handlerSetTheme = (): void =>
    theme === 'light' ? setTheme('dark') : setTheme('light');
  // Set hotkey to change theme.
  useHotkeys('t', handlerSetTheme, {}, [theme]);
  // If not is mounted yet.
  if (!mounted) return null;
  // If is set to light.
  if (theme === 'light') return <DarkIconSVG onClick={handlerSetTheme} />;
  // If is set to dark.
  return <LightIconSVG onClick={handlerSetTheme} />;
};

export default ThemeChanger;
