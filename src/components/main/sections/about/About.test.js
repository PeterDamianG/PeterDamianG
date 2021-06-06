import { render, screen, cleanup } from '@testing-library/react';
import About from './index';

afterAll(cleanup);

describe('/src/components/main/section/about - <About>', () => {
  test('does render section about', () => {
    render(<About />);
    screen.getByText(/Sobre Mí/i);
    screen.getByText(/¡Hola!, ¡Que estés teniendo un buen día!/i);
    screen.getByText(/Interesado en aprender las mejores técnicas y/i);
    screen.getByText(/¡Pero no son todos!:/i);
    screen.getByText(/Javascript/i);
    screen.getByText(/NodeJS/i);
    screen.getByText(/Express/i);
    screen.getByText(/ReactJS/i);
    screen.getByText(/C#/i);
    screen.getByText(/¡Hey puedes/i);
    screen.getByLabelText(/Scroll Down/i);
  });
});
