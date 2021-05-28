import Head from 'next/head';
import AppBar from 'components/layout/appbar';
import Footer from 'components/layout/footer';

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
    <main>
      <p>Main</p>
    </main>
    <Footer />
  </>
);

export default Home;
