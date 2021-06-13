import Head from 'next/head';
import AppBar from 'components/layout/appbar';
import Main from 'components/main';

const Home = () => (
  <>
    <Head>
      <title>Peter Damián G - Personal Web</title>
      <meta
        name='description'
        content='A personal web site. Peter Damian G is a software web developer.'
      />
    </Head>
    <AppBar />
    <Main />
  </>
);

export default Home;
