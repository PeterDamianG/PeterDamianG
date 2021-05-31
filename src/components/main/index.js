/** @module Main/Sections */
import dynamic from 'next/dynamic';
import LoaderSVG from 'components/icons/LoaderSVG';
import { mainStyle } from './main.module.css';
/** @constant {JSX.Element} */
const Hero = dynamic(() => import('components/main/sections/hero'), {
  loading: () => <LoaderSVG />,
});
/** @constant {JSX.Element} */
const About = dynamic(() => import('components/main/sections/about'), {
  loading: () => <LoaderSVG />,
});
/** @constant {JSX.Element} */
const Proyects = dynamic(() => import('components/main/sections/proyects'), {
  loading: () => <LoaderSVG />,
});
/** @constant {JSX.Element} */
const Contact = dynamic(() => import('components/main/sections/contact'), {
  loading: () => <LoaderSVG />,
});
/**
 * A tag main container for sections of the web.
 * @function Main
 * @example
 * import Main from 'components/layout/main'
 * <Main />
 * @returns {JSX.Element} An element of React.
 */
const Main = () => (
  <main className={mainStyle}>
    <Hero />
    <About />
    <Proyects />
    <Contact />
  </main>
);

export default Main;
