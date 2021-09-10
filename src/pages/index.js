/* eslint-disable react/display-name */
/** @module Pages */
import dynamic from 'next/dynamic';
import LoaderSpinner from '@components/icons/utils/loader/LoaderSpinnerSVG';
import Head from 'next/head';
/** @constant {JSX.Element} */
const Main = dynamic(() => import('@components/main/Main'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
/**
 * A component home is entry of page web.
 * @function Home
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
    <Main />
  </>
);

export default Home;
