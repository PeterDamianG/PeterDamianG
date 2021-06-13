/** @module Pages */
import Head from 'next/head';
import AppBar from 'components/layout/appbar';
import Main from 'components/main';
/**
 * A component home is entry of page web.
 * @function Home
 * @returns {JSX.Element} An element of React.
 */
const Home = () => (
  <>
    <Head>
      <title>Peter Damián G - Personal Web</title>
      <meta
        name='description'
        content='Sitio Personal del desarrollador web, Peter Damián Gómez.'
      />
    </Head>
    <AppBar />
    <Main />
  </>
);

export default Home;
