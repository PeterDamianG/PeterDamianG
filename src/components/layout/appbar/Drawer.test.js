import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Drawer from './Drawer';

beforeEach(() => render(<Drawer />));
afterAll(cleanup);

describe('/src/components/layout/appbar/Drawer.js - <Drawer> - Renders', () => {
  test('does render button to open drawer', () => {
    screen.getByLabelText(/Menu Button/i);
    screen.getByRole('button');
  });
  test('Does renders open drawer', () => {
    const arrOfSections = [
      'Back',
      'Principal',
      'Sobre Mí',
      'Proyectos',
      'Contacto',
    ];
    fireEvent.click(screen.getByRole('button'));
    arrOfSections.forEach((element) => {
      screen.getByText(element);
    });
  });
  test('Does close drawer work', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Back'));
    screen.getByLabelText(/Menu Button/i);
  });
});
