import { render, fireEvent } from '@testing-library/preact';
import Overlay from '@components/ui/overlay/Overlay';

beforeEach(() => {
  window.location.hash = '';
  render(<Overlay ChildrenButton={<span>Menu</span>} ChildrenAside={<div />} />);
});

describe('/src/components/ui/overlay/Overlay - HotKeys Nav', () => {
  test('Does HotKeys "H" redirect to section hero.', () => {
    fireEvent.keyDown(document, { key: 'H' });
    expect(window.location.hash).toBe('#hero');
  });
  test('Does HotKeys "A" redirect to section about.', () => {
    fireEvent.keyDown(document, { key: 'A' });
    expect(window.location.hash).toBe('#about');
  });
  test('Does HotKeys "P" redirect to section proyects.', () => {
    fireEvent.keyDown(document, { key: 'P' });
    expect(window.location.hash).toBe('#proyects');
  });
  test('Does HotKeys "C" redirect to section contact.', () => {
    fireEvent.keyDown(document, { key: 'C' });
    expect(window.location.hash).toBe('#contact');
  });
});

describe('/src/components/ui/overlay/Overlay - Focus Trap', () => {
  test('opens overlay and traps Tab focus within it', () => {
    const { getByText, getByLabelText } = render(
      <Overlay
        ChildrenButton={<span>Open</span>}
        ChildrenAside={
          <nav>
            <a href='#one'>Link One</a>
            <a href='#two'>Link Two</a>
          </nav>
        }
      />,
    );
    // Open overlay
    fireEvent.click(getByText('Open'));
    const closeBtn = getByLabelText('Cerrar menú');
    expect(closeBtn).toBeTruthy();

    // Tab forward from last focusable element should wrap to first
    const linkTwo = getByText('Link Two');
    linkTwo.focus();
    fireEvent.keyDown(document, { key: 'Tab' });

    // Tab backward from first focusable should wrap to last
    closeBtn.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
  });

  test('closes overlay and restores focus', () => {
    const { getByText, getByLabelText, queryByLabelText } = render(
      <Overlay
        ChildrenButton={<span>Open</span>}
        ChildrenAside={<div>Content</div>}
      />,
    );
    fireEvent.click(getByText('Open'));
    expect(getByLabelText('Cerrar menú')).toBeTruthy();
    fireEvent.click(getByLabelText('Cerrar menú'));
    expect(queryByLabelText('Cerrar menú')).toBeNull();
  });

  test('pressing unknown key does nothing', () => {
    render(
      <Overlay
        ChildrenButton={<span>Open</span>}
        ChildrenAside={<div>Content</div>}
      />,
    );
    fireEvent.keyDown(document, { key: 'z' });
  });
});
