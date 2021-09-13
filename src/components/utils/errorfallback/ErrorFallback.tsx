import Button from '@components/ui/button/Button';
import * as css from './errorfallback.module.css';
/**
 * A wrapper component to handler errors, is a complement for react-error-boundary.
 * @function ErrorFallback
 * @param error - An error object.
 * @param resetErrorBoundary - A function for restore component.
 * @example
 * import { ErrorBoundary } from 'react-error-boundary'
 * import ErrorFallback from 'components/utils/errorfallback/ErrorFallback'
 *
 * const ui = (): JSX.Element => (
 *  <ErrorBoundary
 *    FallbackComponent={ErrorFallback}
 *    onReset={() => {
 *     // reset the state of your app so the error doesn't happen again
 *   }}
 *  >
 *    <ComponentThatMayError />
 *   </ErrorBoundary>
 * )
 */
const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: Function;
}): JSX.Element => (
  <section className={css['sectionError']} role='alert'>
    <h3>Un error ha ocurrido:</h3>
    <p>{error.message}</p>
    <Button type='button' onClick={(): void => resetErrorBoundary()}>
      Intentar Nuevamente
    </Button>
  </section>
);

export default ErrorFallback;
