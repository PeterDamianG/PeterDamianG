import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import Proyects from './index';
import listProyects from "./setproyects/list/listProyects";

afterAll(cleanup);

describe('/src/components/main/section/proyects - <Proyects> - Render', () => {
  beforeEach(() => render(<Proyects />));
  test('does render section proyects', () => {
    screen.getAllByText(/Proyectos/i);
    screen.getByText(listProyects[0].name);
    screen.getByText(listProyects[0].lang);
    screen.getByAltText(listProyects[0].name);
    screen.getByText(listProyects[0].desc);
    screen.getByText("<");
    screen.getByText(/¡Ir a GitHub!/i);
    screen.getByText(">");
    screen.getByLabelText(/Scroll Down/i);
  });
  test('Does renders new content when click on next button', () => {
    fireEvent.click(screen.getByText(">"));
    screen.getByText(listProyects[1].name);
    screen.getByText(listProyects[1].lang);
    screen.getByAltText(listProyects[1].name);
    screen.getByText(listProyects[1].desc);
  });
  test('Does renders new content when click on previous button', () => {
    fireEvent.click(screen.getByText("<"));
    screen.getByText(listProyects[listProyects.length - 1].name);
    screen.getByText(listProyects[listProyects.length - 1].lang);
    screen.getByAltText(listProyects[listProyects.length - 1].name);
    screen.getByText(listProyects[listProyects.length - 1].desc);
  });
});

describe('/src/components/main/section/about - <Proyects> - Responsive', () => {
  beforeEach(() =>
    render(
      <ResponsiveContext.Provider value={{ width: 1280 }}>
        <Proyects />
      </ResponsiveContext.Provider>,
    ),
  );
  test('does render section proyects in screen width >= 1280', () => {
    screen.getAllByText(/Proyectos/i);
    screen.getByText(listProyects[0].name);
    screen.getByText(listProyects[0].lang);
    screen.getByAltText(listProyects[0].name);
    screen.getByText(listProyects[0].desc);
    screen.getByText("<");
    screen.getByText(/¡Ir a GitHub!/i);
    screen.getByText(">");
    screen.getByLabelText(/Scroll Down/i);
  });
  test('Does renders new content when click on next button in screen width >= 1280', () => {
    fireEvent.click(screen.getByText(">"));
    screen.getByText(listProyects[1].name);
    screen.getByText(listProyects[1].lang);
    screen.getByAltText(listProyects[1].name);
    screen.getByText(listProyects[1].desc);
  });
  test('Does renders new content when click on previous button in screen width >= 1280', () => {
    fireEvent.click(screen.getByText("<"));
    screen.getByText(listProyects[listProyects.length - 1].name);
    screen.getByText(listProyects[listProyects.length - 1].lang);
    screen.getByAltText(listProyects[listProyects.length - 1].name);
    screen.getByText(listProyects[listProyects.length - 1].desc);
  });
});
