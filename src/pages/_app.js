import React from 'react';
import 'normalize.css';
import 'styles/themes.css';
import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';

if (process.env.NODE_ENV !== 'production' && !(typeof window === 'undefined')) {
  // we import react-dom and @axe-core/react dynamically
  // so that we'll receive warning in our console about inaccessible code.
  import('react-dom').then((ReactDOM) => {
    import('@axe-core/react').then((axe) => {
      axe.default(React, ReactDOM, 1000, {});
    });
  });
}

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
