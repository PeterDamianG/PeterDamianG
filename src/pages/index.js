/* eslint-disable react/display-name */
/** @module Pages */
import dynamic from 'next/dynamic';
import LoaderSpinner from 'components/icons/utils/LoaderSpinner';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import AppBar from 'layout/appbar';
/** @constant {JSX.Element} */
const Main = dynamic(() => import('components/main'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
/** @constant {JSX.Element} */
const ReactTooltip = dynamic(() => import('react-tooltip'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
/**
 * A component home is entry of page web.
 * @function Home
 */
const Home = () => {
  const { theme } = useTheme();
  return (
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
      <ReactTooltip
        place='bottom'
        delayShow={600}
        delayHide={200}
        type={theme}
        border
        className='extraToolTip'
      />
    </>
  );
};

export default Home;
