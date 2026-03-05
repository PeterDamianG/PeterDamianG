import { render, screen, cleanup } from '@testing-library/preact';
import Footer from '@layout/footer/Footer';

beforeEach(() => render(<Footer />));
afterEach(cleanup);

describe('/src/components/layout/footer - <Footer> - Render', () => {
  test('does render footer icons', () => {
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
  });

  test('does render footer text', () => {
    screen.getByRole('contentinfo');
    screen.getByText(/Peter DG/i);
  });
});
