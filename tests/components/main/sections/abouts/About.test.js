import { render, screen, cleanup } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import About from '@sections/about/About';

afterAll(cleanup);

describe('/src/components/main/section/about - <About> - Render', () => {
  test('does render section about', () => {
    render(<About />);
    screen.getByText(/Sobre Mí/i);
    screen.getByText(/¡Hola!, ¡Que estés teniendo un buen día!/i);
    screen.getByText(/Iterando siempre sobre cada detalle./i);
    screen.getByText(/¡Pero no son todos!:/i);
    screen.getByText(/ReactJS/i);
    screen.getByText(/NextJS/i);
    screen.getByLabelText(/Scroll Down/i);
  });
});

describe('/src/components/main/section/about - <About> - Responsive', () => {
  test('does render section about', () => {
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <ResponsiveContext.Provider value={{ width: 1280 }}>
        <About />
      </ResponsiveContext.Provider>,
    );
    screen.getByText(/Sobre Mí/i);
    screen.getByLabelText(/Avatar/i);
    screen.getByText(/¡Hola!, ¡Que estés teniendo un buen día!/i);
    screen.getByText(/Iterando siempre sobre cada detalle./i);
    screen.getByText(/¡Pero no son todos!:/i);
    screen.getByText(/ReactJS/i);
    screen.getByText(/NextJS/i);
    screen.getByLabelText(/Scroll Down/i);
  });
  test('does render section about avatar with portrait responsive', () => {
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <ResponsiveContext.Provider value={{ orientation: 'portrait' }}>
        <About />
      </ResponsiveContext.Provider>,
    );
    screen.getByLabelText(/Avatar/i);
  });
});
