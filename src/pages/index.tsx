import dynamic from 'next/dynamic';
import LoaderSpinner from '@components/icons/utils/loader/LoaderSpinnerSVG';
import Head from 'next/head';

const Main = dynamic(() => import('main/Main'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
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
