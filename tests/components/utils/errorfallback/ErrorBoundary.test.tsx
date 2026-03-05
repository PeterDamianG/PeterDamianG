import { render, screen, fireEvent, cleanup } from '@testing-library/preact';
import ErrorBoundary from '@components/utils/errorfallback/ErrorBoundary';

// Suppress console.error for expected errors during tests
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Test error')) return;
    if (typeof args[0] === 'string' && args[0].includes('above error')) return;
    if (typeof args[0] === 'string' && args[0].includes('react-dom')) return;
    originalConsoleError(...args);
  };
});
afterAll(() => { console.error = originalConsoleError; });
afterEach(cleanup);

describe('ErrorBoundary', () => {
  test('renders children when no error', () => {
    const GoodChild = (): JSX.Element => <div>Child content</div>;
    render(
      <ErrorBoundary>
        <GoodChild />
      </ErrorBoundary>,
    );
    screen.getByText('Child content');
  });

  test('renders error fallback when child throws', () => {
    const BadChild = (): JSX.Element => { throw new Error('Test error message'); };
    render(
      <ErrorBoundary>
        <BadChild />
      </ErrorBoundary>,
    );
    screen.getByRole('alert');
    screen.getByText(/Un error ha ocurrido/i);
    screen.getByText('Test error message');
    screen.getByText(/Intentar Nuevamente/i);
  });

  test('resets error boundary when reset button is clicked', () => {
    let shouldThrow = true;
    const DynamicChild = (): JSX.Element => {
      if (shouldThrow) throw new Error('Test error reset');
      return <div>Recovered</div>;
    };

    render(
      <ErrorBoundary>
        <DynamicChild />
      </ErrorBoundary>,
    );
    screen.getByRole('alert');

    // Allow child to render without throwing before clicking reset
    shouldThrow = false;
    fireEvent.click(screen.getByText(/Intentar Nuevamente/i));
    screen.getByText('Recovered');
  });
});
