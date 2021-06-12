/** @module Pages */
import Document, { Html, Head, Main, NextScript } from 'next/document';
/**
 * A class manager for base public html by nextjs.
 * @class MyDocument
 * @returns {JSX.Element} An element of React.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='application-name' content='Peter DG Sitio Web' />
          <meta name='robots' content='index,follow' />
          <meta name='google' content='notranslate' />
          <meta name='subject' content='Sitio web de Peter Damián Gómez.' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='keywords' content='Peter, Damián, Gómez, Personal, Web, Sitio' />
          <meta name='author' content='Peter DG' />
          <meta name='distribution' content='global' />
          <link rel='icon' href='/favicon.ico' />
          <link
            rel='me'
            href='https://github.com/PeterDamianG'
            type='text/html'
          />
          {/* Need reload cache 48hs */}
          <meta httpEquiv='expires' content='172800' />
          {/* Facebook Open Graph */}
          <meta property='fb:app_id' content='123456789' />
          <meta
            property='og:url'
            content='https://github.com/PeterDamianG/PeterDamianG'
          />
          <meta property='og:type' content='Peter DG Sitio Web' />
          <meta property='og:title' content='Peter DG Sitio Web' />
          <meta property='og:image' content='/exampleweb.jpg' />
          <meta property='og:image:alt' content='Imagen de ejemplo de la web. Del sitio web de Peter DG.' />
          <meta property='og:description' content='Sitio Web del desarrollador web, Peter DG.' />
          <meta property='og:site_name' content='Peter DG Sitio Web' />
          <meta property='article:author' content='Peter DG' />
          {/* Twitter Card */}
          <meta name='twitter:card' content='Peter DG Sitio Web' />
          <meta name='twitter:site' content='@PeterDG' />
          <meta name='twitter:creator' content='@PeterDG' />
          <meta
            name='twitter:url'
            content='https://github.com/PeterDamianG/PeterDamianG'
          />
          <meta name='twitter:title' content='Peter DG Sitio Web' />
          <meta
            name='twitter:description'
            content='Sitio Web del desarrollador web, Peter DG.'
          />
          <meta name='twitter:image' content='/exampleweb.jpg' />
          <meta
            name='twitter:image:alt'
            content='Imagen de ejemplo de la web. Del sitio web de Peter DG.'
          />
          {/* Twitter Card */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
