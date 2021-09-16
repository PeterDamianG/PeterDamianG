import dynamic from 'next/dynamic';
import LoaderSpinner from '@components/icons/utils/loader/LoaderSpinnerSVG';
import WrapperSection from './WrapperSection';

const Hero = dynamic(() => import('./sections/hero/Hero'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
const About = dynamic(() => import('./sections/about/About'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
const Proyects = dynamic(() => import('./sections/proyects'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
const Contact = dynamic(() => import('./sections/contact'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
/**
 * A tag main container for sections of the web.
 * @example
 * import Main from 'components/main/Main'
 * <Main />
 */
const Main = (): JSX.Element => (
  <main>
    {/* Section Hero */}
    <WrapperSection
      title='Sección Hero - Peter Damián Gómez'
      description='Sección hero de la web personal de Peter Damián Gómez. Donde se muestra una entrada simple y dinámica para los visitantes.'
      hash='hero'
    >
      <Hero />
    </WrapperSection>
    {/* Section About */}
    <WrapperSection
      title='Sección Sobre Mí - Peter Damián Gómez'
      description='Sección sobre mí de la web personal de Peter Damián Gómez. Un extracto sobre mí persona.'
      hash='about'
    >
      <About />
    </WrapperSection>
    {/* Section Proyect */}
    <WrapperSection
      title='Sección Proyectos - Peter Damián Gómez'
      description='Sección proyectos de la web personal de Peter Damián Gómez. Aquellos proyectos donde he aprendido, desarrollado y practicado sobre la programación web.'
      hash='proyects'
    >
      <Proyects />
    </WrapperSection>
    {/* Section Contact */}
    <WrapperSection
      title='Sección Contacto - Peter Damián Gómez'
      description='Sección contacto de la web personal de Peter Damián Gómez. Aquí puedes encontrar algunas formas de como contactarme.'
      hash='contact'
    >
      <Contact />
    </WrapperSection>
  </main>
);

export default Main;
