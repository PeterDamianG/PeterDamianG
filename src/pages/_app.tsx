// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { AppProps } from 'next/app';
import 'styles/themes.css';
import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';
import AppBar from '@layout/appbar/AppBar';
import Footer from '@layout/footer/Footer';
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
 * A component of Next like a wrapper for whole app.
 */
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <AppBar />
    <Component {...pageProps} />
    <Footer />
  </ThemeProvider>
);

export default App;
