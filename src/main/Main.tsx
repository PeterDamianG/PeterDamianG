import dynamic from 'next/dynamic';
import LoaderSpinner from '@components/icons/utils/loader/LoaderSpinnerSVG';
import * as css from './main.module.css';
import WrapperSection from './WrapperSection';

const Hero = dynamic(() => import('./sections/hero'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
const About = dynamic(() => import('./sections/about'), {
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
  <main className={css['mainStyle']}>
    {/* Section Hero */}
    <WrapperSection
      titleText='Sección Hero - Peter Damián Gómez'
      descriptionText='Sección hero de la web personal de Peter Damián Gómez. Donde se muestra una entrada simple y dinámica para los visitantes.'
      hashRouter='hero'
      IDPath='hero'
    >
      <Hero />
    </WrapperSection>
    {/* Section About */}
    <WrapperSection
      titleText='Sección Sobre Mí - Peter Damián Gómez'
      descriptionText='Sección sobre mí de la web personal de Peter Damián Gómez. Un extracto sobre mí persona.'
      hashRouter='about'
      IDPath='about'
    >
      <About />
    </WrapperSection>
    {/* Section Proyect */}
    <WrapperSection
      titleText='Sección Proyectos - Peter Damián Gómez'
      descriptionText='Sección proyectos de la web personal de Peter Damián Gómez. Aquellos proyectos donde he aprendido, desarrollado y practicado sobre la programación web.'
      hashRouter='proyects'
      IDPath='proyects'
    >
      <Proyects />
    </WrapperSection>
    {/* Section Contact */}
    <WrapperSection
      titleText='Sección Contacto - Peter Damián Gómez'
      descriptionText='Sección contacto de la web personal de Peter Damián Gómez. Aquí puedes encontrar algunas formas de como contactarme.'
      hashRouter='contact'
      IDPath='contact'
    >
      <Contact />
    </WrapperSection>
  </main>
);

export default Main;
