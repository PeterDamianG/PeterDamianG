import { render, screen, fireEvent, cleanup } from '@testing-library/preact';
import Contact from '@sections/contact/Contact';

beforeEach(() => render(<Contact />));
afterEach(cleanup);

describe('/src/components/main/section/contact - <Contact> - Render', () => {
  test('does render section contact', () => {
    screen.getByText(/Contacto/i);
    screen.getByText(/Mensajería Directa/i);
    screen.getByText(/Redes Sociales/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/Gracias por su consideración\./i);
  });

  test('does render arrow up button', () => {
    screen.getByLabelText(/Arrow Up/i);
  });

  test('does click arrow up', () => {
    fireEvent.click(screen.getByLabelText(/Arrow Up/i));
  });
});
