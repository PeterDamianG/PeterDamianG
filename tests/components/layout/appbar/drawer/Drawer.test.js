import { render, screen, fireEvent, cleanup } from '@testing-library/preact';
import Drawer from '@layout/appbar/drawer/Drawer';

afterEach(cleanup);

describe('/src/components/layout/appbar/Drawer - Mobile (default)', () => {
  beforeEach(() => {
    window.location.hash = '';
    render(<Drawer />);
  });

  test('renders open button with menu icon', () => {
    screen.getByLabelText(/Menu Button/i);
    screen.getByRole('button', { name: /Abrir menú/i });
  });

  test('opens drawer and shows nav items', () => {
    fireEvent.click(screen.getByRole('button', { name: /Abrir menú/i }));
    screen.getByText('Inicio');
    screen.getByText('Sobre Mí');
    screen.getByText('Experiencia');
    screen.getByText('Certificaciones');
    screen.getByText('Proyectos');
    screen.getByText('Contacto');
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(/Peter DG\./i);
  });

  test('clicking nav link closes drawer', () => {
    fireEvent.click(screen.getByRole('button', { name: /Abrir menú/i }));
    fireEvent.click(screen.getByText('Experiencia'));
    expect(screen.queryByText('Experiencia')).toBeNull();
  });

  test('closes drawer with close button', () => {
    fireEvent.click(screen.getByRole('button', { name: /Abrir menú/i }));
    screen.getByText('Inicio');
    fireEvent.click(screen.getByRole('button', { name: /Cerrar menú/i }));
    expect(screen.queryByText('Inicio')).toBeNull();
  });

  test('opens drawer with hotkey M', () => {
    fireEvent.keyDown(document, { key: 'm' });
    screen.getByText('Inicio');
    screen.getByText('Sobre Mí');
    screen.getByText('Proyectos');
    screen.getByText('Contacto');
  });

  test('closes drawer with hotkey Escape', () => {
    fireEvent.click(screen.getByRole('button', { name: /Abrir menú/i }));
    screen.getByText('Inicio');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByText('Inicio')).toBeNull();
  });
});

describe('/src/components/layout/appbar/Drawer - Desktop (≥768px)', () => {
  beforeEach(() => {
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(min-width: 768px)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    window.location.hash = '';
    render(<Drawer />);
  });
  afterEach(() => vi.restoreAllMocks());

  test('opens drawer and shows ContentNav1280 with descriptions', () => {
    fireEvent.click(screen.getByRole('button', { name: /Abrir menú/i }));
    screen.getByText('Inicio');
    screen.getByText('Sobre Mí');
    screen.getByText('Experiencia');
    screen.getByText('Certificaciones');
    screen.getByText('Proyectos');
    screen.getByText('Contacto');
    screen.getByText(/Inicio de la web/i);
    screen.getByText(/Conoceme más/i);
    screen.getByText(/trayectoria profesional/i);
    screen.getByText(/certificaciones profesionales/i);
    screen.getByText(/proyectos públicos/i);
    screen.getByText(/aquí las mejores opciones/i);
    screen.getByText(/También puedes cambiar/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
  });

  test('clicking drawer text cycles to next item', () => {
    fireEvent.click(screen.getByRole('button', { name: /Abrir menú/i }));
    const firstText = screen.getByText(/También puedes cambiar/i);
    fireEvent.click(firstText);
    screen.getByText(/Seguridad aplicativa/i);
  });

  test('clicking nav link in desktop closes drawer', () => {
    fireEvent.click(screen.getByRole('button', { name: /Abrir menú/i }));
    fireEvent.click(screen.getByText('Experiencia'));
    expect(screen.queryByText('Experiencia')).toBeNull();
  });
});
