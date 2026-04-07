import { render, screen, fireEvent, cleanup } from '@testing-library/preact';
import Proyects from '@sections/proyects/Proyects';
import listProyects from '@data/ListProyects';

afterEach(cleanup);

describe('/src/components/main/section/proyects - <Proyects> - Render', () => {
  beforeEach(() => render(<Proyects />));

  test('does render section proyects with first item', () => {
    screen.getAllByText(/Proyectos/i);
    screen.getByText(listProyects[0].name);
    screen.getByText(listProyects[0].tech);
    screen.getByAltText(listProyects[0].name);
    screen.getByText(listProyects[0].description);
    screen.getByText(/¡Ir a Repositorio!/i);
    screen.getByLabelText(/Scroll Down/i);
  });

  test('does render previous and next buttons', () => {
    screen.getByRole('button', { name: /previous/i });
    screen.getByRole('button', { name: /next/i });
  });

  test('does render new content when click next button', () => {
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    screen.getByText(listProyects[1].name);
    screen.getByText(listProyects[1].tech);
    screen.getByAltText(listProyects[1].name);
    screen.getByText(listProyects[1].description);
  });

  test('does wrap to last item when clicking previous on first', () => {
    fireEvent.click(screen.getByRole('button', { name: /previous/i }));
    const last = listProyects[listProyects.length - 1];
    screen.getByText(last.name);
    screen.getByText(last.tech);
    screen.getByAltText(last.name);
    screen.getByText(last.description);
  });

  test('does wrap back to first item when reaching end of list', () => {
    listProyects.forEach(() => {
      fireEvent.click(screen.getByRole('button', { name: /next/i }));
    });
    screen.getByText(listProyects[0].name);
    screen.getByAltText(listProyects[0].name);
  });

  test('does navigate with ArrowRight hotkey', () => {
    fireEvent.keyDown(document, { key: 'ArrowRight' });
    screen.getByText(listProyects[1].name);
  });

  test('does navigate with ArrowLeft hotkey', () => {
    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    const last = listProyects[listProyects.length - 1];
    screen.getByText(last.name);
  });

  test('does render pagination dots', () => {
    const dots = screen.getAllByRole('button', { name: /proyecto número/i });
    expect(dots.length).toBe(listProyects.length);
  });

  test('does navigate to specific project via pagination dot', () => {
    const dots = screen.getAllByRole('button', { name: /proyecto número/i });
    fireEvent.click(dots[2]);
    screen.getByText(listProyects[2].name);
  });
});
