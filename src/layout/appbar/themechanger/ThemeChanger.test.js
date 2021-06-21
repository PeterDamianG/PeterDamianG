import { render, screen, cleanup } from '@testing-library/react';
import ThemeChanger from './index';

afterAll(cleanup);

describe('/src/components/layout/themechanger - <ThemeChanger> - Render Component', () => {
  test('does render button to change between themes', () => {
    render(<ThemeChanger />);
    screen.getByLabelText(/Light Button/);
  });
});
