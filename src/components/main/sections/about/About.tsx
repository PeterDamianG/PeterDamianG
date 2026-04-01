import ScrollDownSVG from '@icons/utils/scrolldown/ScrollDownSVG';
import Overlay from '@components/ui/overlay/Overlay';
import TitleSection from '@components/ui/titlesection/TitleSection';
import Avatar from './avatar/Avatar';
import style from './about.module.css';
import ListCertification from './cert/ListCertification';
/**
 * A section call about in the web.
 * @example
 * import About from 'main/sections/about/About'
 * <About />
 */
const About = (): JSX.Element => (
  <>
    <TitleSection>Sobre Mí</TitleSection>
    <Avatar />
    <article className={style.content}>
      <p>
        ¡Hola! Soy <b>desarrollador web</b> y{' '}
        <b>analista de seguridad informática de aplicaciones</b> con
        experiencia en ambos campos.
      </p>
      <p>
        Actualmente trabajo como <b>Sr CS Engineer en Mercado Libre</b>,
        donde realizo modelados de amenazas, evaluaciones de seguridad
        aplicativa y revisión de código. Aquí puedes ver mis
        <Overlay
          ChildrenButton={
            <span
              className={style.certificationButton}
              title='Mostrar listado de certificados.'
            >
              {' '}
              certificaciones.
            </span>
          }
          ChildrenAside={<ListCertification />}
        />
      </p>
      <p>
        Puedes obtener un <b>RESUME o CV</b> de mi persona, en el siguiente
        botón:
      </p>
    </article>
    <a
      href='./resume.pdf'
      target='_blank'
      rel='noreferrer'
      className={style.resumeButton}
      title='Descargar Curriculum Vitae'
    >
      Resume / CV
    </a>
    <a href='#certifications'>
      <ScrollDownSVG />
    </a>
  </>
);

export default About;
