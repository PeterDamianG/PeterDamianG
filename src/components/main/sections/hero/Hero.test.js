import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import textContent from './content/content';
import Hero from './Hero';

afterAll(cleanup);

describe('/src/components/main/section/hero - <Hero> - Renders', () => {
  beforeEach(() => render(<Hero />));
  test('does render section home', () => {
    screen.getByText(/Peter Damián Gómez/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/Me pregunto/i);
    screen.getByLabelText(/Scroll Down/i);
  });
  test('does click in arrow up', () => {
    fireEvent.click(screen.getByLabelText(/Scroll Down/i));
  });
});

describe('/src/components/main/section/hero - <Hero> - Responsive', () => {
  beforeEach(() =>
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <ResponsiveContext.Provider value={{ width: 1280 }}>
        <Hero />
      </ResponsiveContext.Provider>,
    ),
  );
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
  test('Does restart content when array is finish', () => {
    textContent.forEach(() => {
      fireEvent.click(screen.getByLabelText(/Notebook SVG/i));
    });
    screen.getByText(textContent[0].caption);
  });
});

describe('/src/components/main/section/hero - <Hero> - Responsive Portrait', () => {
  beforeEach(() =>
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <ResponsiveContext.Provider value={{ orientation: 'portrait' }}>
        <Hero />
      </ResponsiveContext.Provider>,
    ),
  );
  test('Does renders home in screen portrait', () => {
    screen.getByLabelText(/Notebook SVG/i);
  });
  test('Does renders new content when click figure notebook in screen portrait', () => {
    fireEvent.click(screen.getByLabelText(/Notebook SVG/i));
    screen.getByText(/Me pregunto/i);
  });
  test('Does restart content when array is finish', () => {
    textContent.forEach(() => {
      fireEvent.click(screen.getByLabelText(/Notebook SVG/i));
    });
    screen.getByText(textContent[0].caption);
  });
});
