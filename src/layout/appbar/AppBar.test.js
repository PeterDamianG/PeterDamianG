import { render, screen, cleanup } from '@testing-library/react';
import AppBar from './AppBar';

afterAll(cleanup);

describe('/src/components/layout/appbar - <AppBar> - Render AppBar', () => {
  test('does render app bar', () => {
    render(<AppBar />);
    screen.getByRole('heading');
    screen.getByText(/Peter DG/i);
    screen.getByLabelText(/Light Button/);
    screen.getByLabelText(/Menu Button/);
  });
  test('does render app bar with another prop', () => {
    const testText = 'Example for Test';
    render(<AppBar appTitle={testText} />);
    screen.getByRole('heading');
    screen.getByText(testText);
    screen.getByLabelText(/Light Button/);
    screen.getByLabelText(/Menu Button/);
  });
});
