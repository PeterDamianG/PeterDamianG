import { render, screen, cleanup } from '@testing-library/react';
import Footer from './index';

beforeEach(() => render(<Footer />));
afterAll(cleanup);

describe('/src/components/layout/footer - <Footer> - Render Content Footer', () => {
  test('does render footer icons', () => {
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
  });
  test('does render footer text', () => {
    screen.getByRole('contentinfo');
    screen.getByText(/Peter Damian G./i);
  });
});
