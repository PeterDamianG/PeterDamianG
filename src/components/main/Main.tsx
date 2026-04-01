import { Hero, About, Certifications, Proyects, Contact } from './Placeholders';
import WrapperSection from './WrapperSection';
/**
 * A tag main container for sections of the web.
 * @example
 * import Main from 'components/main/Main'
 * <Main />
 */
const Main = (): JSX.Element => (
  <main id='main-content'>
    <WrapperSection hash='hero'>
      <Hero />
    </WrapperSection>
    <WrapperSection hash='about'>
      <About />
    </WrapperSection>
    <WrapperSection hash='certifications'>
      <Certifications />
    </WrapperSection>
    <WrapperSection hash='proyects'>
      <Proyects />
    </WrapperSection>
    <WrapperSection hash='contact'>
      <Contact />
    </WrapperSection>
  </main>
);

export default Main;
