/** @module Sections */
import { useTheme } from 'next-themes';
import ReactTooltip from 'react-tooltip';
import { mainStyle } from './main.module.css';
import Hero from './sections/hero';
import About from './sections/about';
import Proyects from './sections/proyects';
import Contact from './sections/contact';
/**
 * A tag main container for sections of the web.
 * @function Main
 * @example
 * import Main from 'components/main'
 * <Main />
 * @returns {JSX.Element} An element of React.
 */
const Main = () => {
  const { theme } = useTheme();
  return (
    <main className={mainStyle}>
      <Hero />
      <About />
      <Proyects />
      <Contact />
      <ReactTooltip
        place='bottom'
        delayShow={600}
        delayHide={200}
        type={theme}
        border
        className='extraToolTip'
      />
    </main>
  );
};

export default Main;
