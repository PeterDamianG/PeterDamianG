import Head from 'next/head';
import Main from '@components/main/Main';
/**
 * A component home is entry of page web. After _document and _app.
 */
const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Peter Damián G - Personal Web</title>
      <meta
        name='description'
        content='Sitio Personal del desarrollador web, Peter Damián Gómez.'
      />
    </Head>
    <Main />
  </>
);

export default Home;
