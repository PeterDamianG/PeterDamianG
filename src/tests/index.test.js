import { render, screen } from '@testing-library/react';
import App from 'pages/index';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    screen.getByRole('heading', { name: 'Welcome to Next.js!' });
  });
});
