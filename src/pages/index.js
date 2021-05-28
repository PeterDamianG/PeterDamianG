import Head from 'next/head';
import AppBar from 'components/layout/appbar';

const Home = () => (
  <>
    <Head>
      <title>Peter Damian G - Personal Web</title>
      <meta
        name='description'
        content='A personal web site. Peter Damian G is a software web developer.'
      />
    </Head>

    <AppBar />

    <main>
      <p>Main</p>
    </main>

    <footer>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <span>
          <img src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </footer>
  </>
);

export default Home;
