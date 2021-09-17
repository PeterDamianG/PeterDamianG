import ScrollDownSVG from '@icons/utils/scrolldown/ScrollDownSVG';
import Button from '@components/ui/button/Button';
import Overlay from '@components/ui/overlay/Overlay';
import Avatar from './avatar/Avatar';
import * as css from './about.module.css';
import Certification from './cert/Certification';
/**
 * A section call about in the web.
 * @example
 * import About from 'main/sections/about/About'
 * <About />
 */
const About = (): JSX.Element => (
  <>
    <h2 className={css['title']}>Sobre Mí</h2>
    <Avatar />
    <article className={css['content']}>
      <p>
        ¡Hola! <b>¿Quién soy?</b> Soy un apasionado por la{' '}
        <b>tecnología, juegos y programación.</b>
      </p>
      <p>
        Estoy interesado en formarme constantemente y mejorar día a día. Aquí
        puedes observar algunas de mis
        <Overlay
          ChildrenButton={
            <u>
              <em>
                <b>certificaciones.</b>
              </em>
            </u>
          }
          ChildrenAside={<Certification />}
        />
      </p>
      <p>
        Puedes obtener un <b>RESUME o CV</b> de mí persona, en el siguiente
        botón:
      </p>
    </article>
    <a
      href='/profile/cv.pdf'
      target='_blank'
      rel='noreferrer'
      className={css['resumeButton']}
    >
      <Button title='Curriculum Vitae o Resume'>Resume</Button>
    </a>
    <a href='#proyects'>
      <ScrollDownSVG />
    </a>
  </>
);

export default About;
