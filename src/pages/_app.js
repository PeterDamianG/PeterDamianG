/** @module Pages */
import React from 'react';
import 'normalize.css';
import 'styles/themes.css';
import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from 'components/layout/footer';
// Conditional import for add a11y with axe-core
if (process.env.NODE_ENV !== 'production' && !(typeof window === 'undefined')) {
  // we import react-dom and @axe-core/react dynamically
  // so that we'll receive warning in our console about inaccessible code.
  import('react-dom').then((ReactDOM) => {
    import('@axe-core/react').then((axe) => {
      axe.default(React, ReactDOM, 1000, {});
    });
  });
}
/**
 * A component of Next like a wrapper for app.
 * @function App
 * @returns {JSX.Element} An element of React.
 */
const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
);

export default App;
