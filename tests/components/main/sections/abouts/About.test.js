import { render, screen, cleanup } from '@testing-library/preact';
import About from '@sections/about/About';

afterEach(cleanup);

describe('/src/components/main/section/about - <About> - Render', () => {
  test('does render section about', () => {
    render(<About />);
    screen.getByText(/Sobre Mí/i);
    screen.getByText(/¡Hola!/i, { selector: 'p' });
    screen.getByText(/certificaciones\./i);
    // "RESUME o CV" is inside a <b> tag
    screen.getByText('RESUME o CV');
    screen.getByText('Resume');
    screen.getByLabelText(/Avatar/i);
    screen.getByLabelText(/Scroll Down/i);
  });

  test('does always render avatar', () => {
    render(<About />);
    const avatar = screen.getByLabelText(/Avatar/i);
    expect(avatar.tagName).toBe('IMG');
  });
});
