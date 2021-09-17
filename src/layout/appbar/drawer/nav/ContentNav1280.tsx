import { useState } from 'react';
import useFunctionOverTime from 'hooks/useFunctionOverTime';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import textDinamicNav from './textDinamicNav';
import * as css from './contentnav1280.module.css';
/**
 * A content of navigation when you have in 1280 or more of resolution width.
 * @example
 * import ContentNav1280 from 'layout/appbar/drawer/nav/ContentNav1280'
 * <ContentNav1280 />
 */
const ContentNav1280 = ({
  close = (): Function | null => null,
}: {
  close?: Function;
}): JSX.Element => {
  // State for show/change textDinamicNav.
  const [number, setNumber] = useState(0);
  // Handler click on textDinamicNav.
  const handlerClickText = (): void => {
    if (number === textDinamicNav.length - 1) setNumber(0);
    else setNumber((prevNumber) => prevNumber + 1);
  };
  // Hook to change states automatic.
  useFunctionOverTime(handlerClickText);
  // Render.
  return (
    <nav className={css['sidenav']}>
      <article className={css['hero']}>
        <a
          title='Presiona H, para acceder rápidamente a esa sección.'
          href='#hero'
          onClick={(): void => close()}
        >
          Inicio
        </a>
        <p>Inicio de la web, donde les comparto algunos pensamientos.</p>
      </article>
      <article className={css['about']}>
        <a
          title='Presiona A, para acceder rápidamente a esa sección.'
          href='#about'
          onClick={(): void => close()}
        >
          Sobre Mí
        </a>
        <p>Conoceme más. Algunos detalles sobre mí persona.</p>
      </article>
      <article className={css['proyects']}>
        <a
          title='Presiona P, para acceder rápidamente a esa sección.'
          href='#proyects'
          onClick={(): void => close()}
        >
          Proyectos
        </a>
        <p>Los proyectos públicos que he llevado a cabo.</p>
      </article>
      <article className={css['contact']}>
        <a
          title='Presiona C, para acceder rápidamente a esa sección.'
          href='#contact'
          onClick={(): void => close()}
        >
          Contacto
        </a>
        <p>Sí estás interesado en contactarme, aquí las mejores opciones.</p>
      </article>
      <article className={css['detail']}>
        <h3>Peter DG</h3>
        <SocialMedia />
        {[number].map((numberInt) => (
          <p
            className={css['textDinamicNavStyle']}
            onClick={handlerClickText}
            aria-hidden='true'
            key={numberInt}
          >
            {textDinamicNav[number]}
          </p>
        ))}
        <small>© {new Date().getFullYear()} Peter DG.</small>
      </article>
    </nav>
  );
};

export default ContentNav1280;
