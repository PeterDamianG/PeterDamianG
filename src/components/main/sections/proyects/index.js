import ScrollDownSVG from 'components/icons/utils/scrolldown';
import { sectionStyle } from './proyects.module.css';
import SetCards from './components/SetCards';

const Proyects = () => (
  <section id='proyects' className={sectionStyle}>
    <h2>Proyectos</h2>
    <SetCards />
    <ScrollDownSVG />
  </section>
);

export default Proyects;
