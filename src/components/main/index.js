/** @module Main/Sections */
import dynamic from 'next/dynamic';
import { mainStyle } from './main.module.css';
/** @constant {JSX.Element} */
const Hero = dynamic(() => import('components/main/sections/hero'), {
  ssr: false,
});
/** @constant {JSX.Element} */
const About = dynamic(() => import('components/main/sections/about'), {
  ssr: false,
});
/** @constant {JSX.Element} */
const Proyects = dynamic(() => import('components/main/sections/proyects'), {
  ssr: false,
});
/** @constant {JSX.Element} */
const Contact = dynamic(() => import('components/main/sections/contact'), {
  ssr: false,
});
/**
 * A tag main container for sections of the web.
 * @function Main
 * @example
 * import Main from 'components/main'
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
