/** @module Sections */
/**
 * A component to show, is a complement for react-error-boundary.
 * @function ErrorFallback
 * @param {Error} error - An error object.
 * @param {Function} resetErrorBoundary - A function for restore component.
 * @example
 * import {ErrorBoundary} from 'react-error-boundary'
 * import ErrorFallback from 'components/main/ErrorFallback'
 *
 * const ui = (
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
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role='alert'>
    <p>Un error ha ocurrido:</p>
    <pre>{error.message}</pre>
    <button type='button' onClick={resetErrorBoundary}>
      Intentar Nuevamente
    </button>
  </div>
);

export default ErrorFallback;
