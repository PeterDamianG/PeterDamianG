import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Context as ResponsiveContext } from 'react-responsive';
import Drawer from '@layout/appbar/drawer/Drawer';

beforeEach(() => {
  delete window.location;
  window.location = new URL('https://www.mock.com');
});

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
  test('Does renders close drawer', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('X'));
    screen.getByRole('button');
  });
  test('Does set the style if we are in the place right', () => {
    window.location.hash = 'hero';
    expect(window.location.hash).toBe('#hero');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Inicio')).toHaveStyle(
      'text-decoration: underline',
    );
  });
});

describe('/src/components/layout/appbar/Drawer.js - <Drawer> - Responsive', () => {
  beforeEach(() =>
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <ResponsiveContext.Provider value={{ width: 1280 }}>
        <Drawer />
      </ResponsiveContext.Provider>,
    ),
  );
  test('Does renders open drawer in screen width >= 1280', () => {
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
  test('Does set the style if we are in the place right in width >= 1280', () => {
    window.location.hash = 'contact';
    expect(window.location.hash).toBe('#contact');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Contacto')).toHaveStyle(
      'text-decoration: underline',
    );
  });
});

describe('/src/components/layout/appbar/Drawer.js - <Drawer> - HotKeys', () => {
  test('Does renders open drawer with key M', () => {
    render(<Drawer />);
    const arrOfSections = ['X', 'Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'];
    userEvent.keyboard('M');
    arrOfSections.forEach((element) => {
      screen.getByText(element);
    });
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/Peter DG./i);
  });
});
