import { render, screen, fireEvent, cleanup } from '@testing-library/preact';
import ThemeChanger from '@layout/appbar/themechanger/ThemeChanger';

afterEach(() => {
  localStorage.clear();
  cleanup();
});

describe('/src/components/layout/themechanger - <ThemeChanger> - Render', () => {
  test('renders dark-mode button when theme is light (default)', () => {
    render(<ThemeChanger />);
    screen.getByLabelText(/Dark Button/i);
  });

  test('toggles theme on click', () => {
    render(<ThemeChanger />);
    fireEvent.click(screen.getByLabelText(/Dark Button/i));
    screen.getByLabelText(/Light Button/i);
    fireEvent.click(screen.getByLabelText(/Light Button/i));
    screen.getByLabelText(/Dark Button/i);
  });

  test('toggles theme with hotkey T', () => {
    render(<ThemeChanger />);
    screen.getByLabelText(/Dark Button/i);
    fireEvent.keyDown(document, { key: 'T' });
    screen.getByLabelText(/Light Button/i);
    fireEvent.keyDown(document, { key: 't' });
    screen.getByLabelText(/Dark Button/i);
  });

  test('reads initial theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeChanger />);
    screen.getByLabelText(/Light Button/i);
  });
});
