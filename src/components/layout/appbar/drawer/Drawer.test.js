import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import Drawer from '.';

afterAll(cleanup);

describe('/src/components/layout/appbar/Drawer.js - <Drawer> - Renders', () => {
  beforeEach(() => render(<Drawer />));
  test('does render button to open drawer', () => {
    screen.getByLabelText(/Menu Button/i);
    screen.getByRole('button');
  });
  test('Does renders open drawer', () => {
    const arrOfSections = ['X', 'Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'];
    fireEvent.click(screen.getByRole('button'));
    arrOfSections.forEach((element) => {
      screen.getByText(element);
    });
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/Peter DG./i);
  });
});

describe('/src/components/layout/appbar/Drawer.js - <Drawer> - Responsive', () => {
  test('Does renders open drawer in screen width >= 1280', () => {
    render(
      <ResponsiveContext.Provider value={{ width: 1280 }}>
        <Drawer />
      </ResponsiveContext.Provider>,
    );
    const arrOfSections = ['X', 'Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'];
    fireEvent.click(screen.getByRole('button'));
    arrOfSections.forEach((element) => {
      screen.getByText(element);
    });
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/Inicio de la web,/i);
    screen.getByText(/Conoceme más./i);
    screen.getByText(/Los proyectos que he llevado a cabo./i);
    screen.getByText(/aquí las mejores opciones./i);
    screen.getByText(/resolución preferida./i);
    screen.getByText(/Peter DG./i);
  });
});
