/** @module Sections */
import Head from 'next/head';
import { useTheme } from 'next-themes';
import ReactTooltip from 'react-tooltip';
import { InView } from 'react-intersection-observer';
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
  const absoluteThreshold = 0.25;
  const { theme } = useTheme();
  return (
    <main className={mainStyle}>
      {/* Section Hero Intersection */}
      <InView threshold={absoluteThreshold}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Hero />
            {inView && (
              <Head>
                <title>Sección Hero - Peter Damián Gómez</title>
                <meta
                  name='description'
                  content='Sección hero de la web personal de Peter Damián Gómez. Donde se muestra una entrada simple y dinámica para los visitantes.'
                />
              </Head>
            )}
          </div>
        )}
      </InView>
      {/* Section About Intersection */}
      <InView threshold={absoluteThreshold}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <About />
            {inView && (
              <Head>
                <title>Sección Sobre Mí - Peter Damián Gómez</title>
                <meta
                  name='description'
                  content='Sección sobre mí de la web personal de Peter Damián Gómez. Un extracto sobre mí persona.'
                />
              </Head>
            )}
          </div>
        )}
      </InView>
      {/* Section Proyect Intersection */}
      <InView threshold={absoluteThreshold}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Proyects />
            {inView && (
              <Head>
                <title>Sección Proyectos - Peter Damián Gómez</title>
                <meta
                  name='description'
                  content='Sección proyectos de la web personal de Peter Damián Gómez. Aquellos proyectos donde he aprendido, desarrollado y practicado sobre la programación web.'
                />
              </Head>
            )}
          </div>
        )}
      </InView>
      {/* Section Contact Intersection */}
      <InView threshold={absoluteThreshold}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Contact />
            {inView && (
              <Head>
                <title>Sección Contacto - Peter Damián Gómez</title>
                <meta
                  name='description'
                  content='Sección contacto de la web personal de Peter Damián Gómez. Aquí puedes encontrar algunas formas de como contactarme.'
                />
              </Head>
            )}
          </div>
        )}
      </InView>
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
