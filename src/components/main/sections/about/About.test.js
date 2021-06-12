import { render, screen, cleanup } from '@testing-library/react';
import About from './index';

afterAll(cleanup);

describe('/src/components/main/section/about - <About>', () => {
  test('does render section about', () => {
    render(<About />);
    screen.getByText(/Sobre Mí/i);
    screen.getByLabelText(/Scroll Down/i);
  });
});
