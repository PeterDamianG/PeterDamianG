import { render, screen, cleanup } from '@testing-library/preact';
import AppBar from '@components/layout/appbar/AppBar';

afterEach(cleanup);

describe('/src/components/layout/appbar - <AppBar> - Render AppBar', () => {
  test('does render app bar with default title', () => {
    render(<AppBar />);
    screen.getByRole('heading');
    screen.getByText(/Peter DG/i);
    screen.getByLabelText(/Dark Button/i);
    screen.getByLabelText(/Menu Button/i);
  });

  test('does render app bar with custom title', () => {
    const testText = 'Example for Test';
    render(<AppBar appTitle={testText} />);
    screen.getByRole('heading');
    screen.getByText(testText);
    screen.getByLabelText(/Dark Button/i);
    screen.getByLabelText(/Menu Button/i);
  });
});
