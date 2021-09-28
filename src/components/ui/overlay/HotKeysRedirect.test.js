import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Drawer from './Overlay';

beforeEach(() => {
  delete window.location;
  window.location = new URL('https://www.mock.com');
  render(<Drawer />);
});

afterAll(cleanup);

describe('/src/components/layout/appbar/Drawer.js - <Drawer> - HotKeys Nav', () => {
  test('Does HotKeys "H" redirect to section home working.', () => {
    userEvent.keyboard('H');
    expect(window.location.hash).toBe('#hero');
  });
  test('Does HotKeys "A" redirect to section about working.', () => {
    userEvent.keyboard('A');
    expect(window.location.hash).toBe('#about');
  });
  test('Does HotKeys "P" redirect to section proyects working.', () => {
    userEvent.keyboard('P');
    expect(window.location.hash).toBe('#proyects');
  });
  test('Does HotKeys "C" redirect to section contact working.', () => {
    userEvent.keyboard('C');
    expect(window.location.hash).toBe('#contact');
  });
});
