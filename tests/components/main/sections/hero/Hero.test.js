import { render, screen, fireEvent, cleanup } from '@testing-library/preact';
import HeroContent from '@data/HeroContent';
import Hero from '@sections/hero/Hero';

const H4_TITLE = 'Haz me click, para ver otro de mis pensamientos.';

afterEach(cleanup);

describe('/src/components/main/section/hero - <Hero> - Renders', () => {
  beforeEach(() => render(<Hero />));

  test('does render hero section', () => {
    screen.getByText(/Peter Damián Gómez/i);
    screen.getByText(/Senior Cybersecurity Engineer/i);
    screen.getByText(/Application Security/i);
    screen.getByLabelText(/GitHub Button/);
    screen.getByLabelText(/GoogleMail Button/);
    screen.getByLabelText(/LinkedIn Button/);
    screen.getByText(HeroContent[0].caption);
    screen.getByLabelText(/Scroll Down/i);
  });

  test('click on caption h4 changes to next item', () => {
    // h4 always present; click bubbles to article onClick
    fireEvent.click(screen.getByTitle(H4_TITLE));
    screen.getByText(HeroContent[1].caption);
  });

  test('wraps back to first caption after full cycle', () => {
    HeroContent.forEach(() => {
      fireEvent.click(screen.getByTitle(H4_TITLE));
    });
    screen.getByText(HeroContent[0].caption);
  });
});

describe('/src/components/main/section/hero - <Hero> - Responsive IDE', () => {
  const IDE_TITLE = 'Haz me click, para leer el siguiente de mis pensamientos.';

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
    render(<Hero />);
  });
  afterEach(() => vi.restoreAllMocks());

  test('renders IDE section when screen is desktop width', () => {
    screen.getByTitle(IDE_TITLE);
    screen.getByText(HeroContent[0].title);
  });

  test('click on IDE changes caption', () => {
    // Use the Ide section title to click specifically on Ide
    fireEvent.click(screen.getByTitle(IDE_TITLE));
    screen.getByText(HeroContent[1].caption);
  });
});

describe('/src/components/main/section/hero - <Hero> - Portrait IDE', () => {
  beforeEach(() => {
    vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(orientation: portrait)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    render(<Hero />);
  });
  afterEach(() => vi.restoreAllMocks());

  test('renders IDE in portrait orientation', () => {
    screen.getByTitle('Haz me click, para leer el siguiente de mis pensamientos.');
  });
});
