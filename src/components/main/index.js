/** @module Sections */
import { useTheme } from 'next-themes';
import ReactTooltip from 'react-tooltip';
import { mainStyle } from './main.module.css';
import WrapperSection from './WrapperSection';
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
 */
const Main = () => {
  const { theme } = useTheme();
  return (
    <main className={mainStyle}>
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
      {/* Tooltips */}
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
