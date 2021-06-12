import { render, screen, cleanup } from '@testing-library/react';
import Contact from './index';

afterAll(cleanup);

describe('/src/components/main/section/contact - <Contact> - Render', () => {
  test('does render section contact', () => {
    render(<Contact />);
    screen.getByText(/Contacto/i);
    screen.getByText(/¿Y ahora, qué?/i);
    screen.getByText(/¿Quiéres contactarme?/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/¿Necesitas un CV o Resume?/i);
    screen.getByText(/Gracias por su consideración./i);
  });
});
