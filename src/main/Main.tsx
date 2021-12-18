import dynamic from 'next/dynamic';
import LoaderSpinner from '@components/icons/utils/loader/LoaderSpinnerSVG';
import HomePlacerholderSVG from '@components/placeholders/home/HomePlaceholderSVG';
import AboutPlacerholderSVG from '@components/placeholders/about/AboutPlaceholderSVG';
import WrapperSection from './WrapperSection';

const Hero = dynamic(
  () => import('../components/placeholders/home/HomePlaceholderSVG'),
  {
    loading: () => <HomePlacerholderSVG />,
  },
);
const About = dynamic(
  () => import('../components/placeholders/about/AboutPlaceholderSVG'),
  {
    loading: () => <AboutPlacerholderSVG />,
  },
);
const Proyects = dynamic(() => import('./sections/proyects/Proyects'), {
  loading: () => <LoaderSpinner />,
});
const Contact = dynamic(() => import('./sections/contact/Contact'), {
  loading: () => <LoaderSpinner />,
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
      description='Sección hero de la web personal de Peter Damián Gómez. Donde se muestra una entrada dinámica para los visitantes.'
      hash='hero'
    >
      <Hero />
    </WrapperSection>
    {/* Section About */}
    <WrapperSection
      title='Sección Sobre Mí - Peter Damián Gómez'
      description='Sección sobre mí de la web personal de Peter Damián Gómez. Un extracto sobre mí persona y algo de información.'
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
