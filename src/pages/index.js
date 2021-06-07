import Head from 'next/head';
import AppBar from 'components/layout/appbar';
import Main from 'components/main';
import Footer from 'components/layout/footer';

const Home = () => (
  <>
    <Head>
      <title>Peter Damián G - Personal Web</title>
      <meta
        name='description'
        content='A personal web site. Peter Damian G is a software web developer.'
      />
      <link
        rel='preload'
        href='https://api.github.com/users/peterdamiang/repos'
        as='fetch'
        crossOrigin='anonymous'
      />
    </Head>
    <AppBar />
    <Main />
    <Footer />
  </>
);

export default Home;
