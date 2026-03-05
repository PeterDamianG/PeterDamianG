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
