import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
    <button type='button' onClick={handlerSetTheme}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeChanger;
