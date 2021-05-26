import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  // Handler
  if (!mounted) return null;
  return (
    <button type='button' onClick={() => setTheme('light')}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeChanger;
