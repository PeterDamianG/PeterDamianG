import { render, screen } from '@testing-library/react';
import AppBar from 'components/layout/appbar';

describe('App', () => {
  test('renders without crashing', () => {
    render(<AppBar />);
    screen.getByText(/Peter DG/);
  });
});
