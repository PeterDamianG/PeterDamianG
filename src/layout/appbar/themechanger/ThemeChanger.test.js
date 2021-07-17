import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import ThemeChanger from './index';

const localStorageMock = {};

beforeAll(() => {
  // Create a mock of the window.matchMedia function
  // Based on: https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Create mocks of localStorage getItem and setItem functions
  global.Storage.prototype.getItem = jest.fn((key) => localStorageMock[key]);
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    localStorageMock[key] = value;
  });
});

afterAll(cleanup);

describe('/src/components/layout/themechanger - <ThemeChanger> - Render Component', () => {
  test('does render button to change between themes', () => {
    render(<ThemeChanger />);
    screen.getByLabelText(/Light Button/);
  });
  test('does click on button theme change.', () => {
    render(
      <ThemeProvider>
        <ThemeChanger />
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByLabelText(/Light Button/));
    screen.getByLabelText(/Dark Button/);
    fireEvent.click(screen.getByLabelText(/Dark Button/));
    screen.getByLabelText(/Light Button/);
  });
});
