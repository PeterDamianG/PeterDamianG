import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LightIconSVG from 'components/icons/LightIconSVG';
import DarkIconSVG from 'components/icons/DarkIconSVG';
import { svg } from './svg.module.css';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  // Handler
  const handlerSetTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  if (!mounted) return null;

  return (
    <>
      {theme === 'light' ? (
        <DarkIconSVG onClick={handlerSetTheme} className={svg} />
      ) : (
        <LightIconSVG onClick={handlerSetTheme} className={svg} />
      )}
    </>
  );
};

export default ThemeChanger;
