import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Hero from './index';

beforeEach(() => render(<Hero />));
afterAll(cleanup);

describe('/src/components/main/section/hero - <Hero>', () => {
  test('does render section home', () => {
    screen.getByText(/Peter Damián Gómez/i);
    screen.getByText(/Web Developer/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMain Button/);
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
