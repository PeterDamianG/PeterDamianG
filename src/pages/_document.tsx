// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
/**
 * A class manager for base public html by nextjs.
 * @class MyDocument
 */
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='es'>
        <Head>
          <meta name='application-name' content='Peter DG Sitio Web' />
          <meta name='robots' content='index,follow' />
          <meta name='google' content='notranslate' />
          <meta name='subject' content='Sitio web de Peter Damián Gómez.' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8' />
          <meta
            name='keywords'
            content='Peter, Damián, Gómez, Personal, Web, Sitio'
          />
          <meta name='author' content='Peter DG' />
          <meta name='distribution' content='global' />
          {/*
           * Add base64 icon, to fix reply request.
           */}
          <link
            rel='icon'
            type='image/png'
            href='data:image/png;base64,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'
          />
          {/*
           * Refer to me GitHub.
           */}
          <link href='https://github.com/PeterDamianG' type='text/html' />
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
          <meta
            property='og:image:alt'
            content='Imagen de ejemplo de la web. Del sitio web de Peter DG.'
          />
          <meta
            property='og:description'
            content='Sitio Web del desarrollador web, Peter DG.'
          />
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
