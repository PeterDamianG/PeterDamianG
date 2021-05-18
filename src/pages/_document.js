import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='application-name' content='Template-Next' />
          <meta name='robots' content='index,follow' />
          <meta name='google' content='notranslate' />
          <meta name='subject' content='A template for nextjs.' />
          <meta name='mobile-web-app-capable' content='yes' />
          <link rel='icon' href='/favicon.ico' />
          <link
            rel='me'
            href='https://github.com/PeterDamianG'
            type='text/html'
          />
          {/* Facebook Open Graph */}
          <meta property='fb:app_id' content='123456789' />
          <meta
            property='og:url'
            content='https://github.com/PeterDamianG/template-next'
          />
          <meta property='og:type' content='Website' />
          <meta property='og:title' content='Template Next' />
          <meta property='og:image' content='/imageog.jpg' />
          <meta property='og:image:alt' content='You need put an image here.' />
          <meta property='og:description' content='A template for nextjs.' />
          <meta property='og:site_name' content='Template Next' />
          <meta property='article:author' content='Peter Damian G' />
          {/* Twitter Card */}
          <meta name='twitter:card' content='Template Next' />
          <meta name='twitter:site' content='@site_account' />
          <meta name='twitter:creator' content='@your_account' />
          <meta
            name='twitter:url'
            content='https://github.com/PeterDamianG/template-next'
          />
          <meta name='twitter:title' content='Template Next' />
          <meta
            name='twitter:description'
            content='A template for nextjs. Content description less than 200 characters'
          />
          <meta name='twitter:image' content='/image.jpg' />
          <meta
            name='twitter:image:alt'
            content='You need put an image here. Maximum 420 characters.'
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
