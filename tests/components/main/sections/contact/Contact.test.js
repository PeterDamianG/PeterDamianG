import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Contact from '@sections/contact/Contact';

beforeEach(() => render(<Contact />));

afterAll(cleanup);

describe('/src/components/main/section/contact - <Contact> - Render', () => {
  test('does render section contact', () => {
    screen.getByText(/Contacto/i);
    screen.getByText(/¿Y ahora, qué?/i);
    screen.getByText(/¿Quiéres contactarme?/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/¿Necesitas un CV o Resume?/i);
    screen.getByText(/Gracias por su consideración./i);
  });
  test('does click in arrow up', () => {
    fireEvent.click(screen.getByLabelText(/Arrow Up/i));
  });
});
