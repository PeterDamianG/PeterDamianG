import { render, screen, cleanup } from '@testing-library/react';
import Footer from './index';

beforeEach(() => render(<Footer />));
afterAll(cleanup);

describe('/src/components/layout/footer - <Footer>', () => {
  test('does render footer text', () => {
    screen.getByRole('contentinfo');
    screen.getByText(/Peter Damian G./i);
  });
  test('does render footer icons', () => {
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByLabelText(/Instagram Button/);
  });
});
