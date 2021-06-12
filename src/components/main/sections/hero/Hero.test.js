import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import Hero from './index';

afterAll(cleanup);

describe('/src/components/main/section/hero - <Hero> - Renders', () => {
  beforeEach(() => render(<Hero />));
  test('does render section home', () => {
    screen.getByText(/Peter Damián Gómez/i);
    screen.getByText(/Web Developer/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByLabelText(/Notebook SVG/i);
    screen.getByText(/Me pregunto/i);
    screen.getByLabelText(/Scroll Down/i);
  });
  test('Does renders new content when click figure notebook', () => {
    fireEvent.click(screen.getByLabelText(/Notebook SVG/i));
    screen.getByText(/Me pregunto/i);
  });
});

describe('/src/components/main/section/hero - <Hero> - Responsive', () => {
  beforeEach(() => render(
    <ResponsiveContext.Provider value={{ width: 1280 }}>
      <Hero />
    </ResponsiveContext.Provider>,
  ));
  test('Does renders home in screen width >= 1280', () => {
    screen.getByText(/Peter Damián Gómez/i);
    screen.getByText(/Web Developer/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/Me pregunto/i);
    screen.getByLabelText(/Notebook SVG/i);
    screen.getByLabelText(/Scroll Down/i);
  });
  test('Does renders new content when click figure notebook in screen width >= 1280', () => {
    fireEvent.click(screen.getByLabelText(/Notebook SVG/i));
    screen.getByText(/Me pregunto/i);
  });
});