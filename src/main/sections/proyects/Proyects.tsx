import ScrollDownSVG from '@components/icons/utils/scrolldown/ScrollDownSVG';
import TitleSection from '@components/ui/titlesection/TitleSection';
import ShowProyects from './showproyect/ShowProyect';
/**
 * A section call proyects in the web.
 * @example
 * import Proyects from 'main/sections/proyects/Proyects'
 * <Proyects />
 */
const Proyects = (): JSX.Element => (
  <>
    <TitleSection value='Proyectos' />
    <ShowProyects />
    <a href='#contact'>
      <ScrollDownSVG />
    </a>
  </>
);

export default Proyects;
