/** @module Main/Sections/About */
import ScrollDownSVG from 'components/icons/utils/scrolldown/ScrollDownSVG';
import { useMediaQuery } from 'react-responsive';
import Avatar from './Avatar';
import { sectionStyle } from './about.module.css';
/**
 * A section call about in the web.
 * @function About
 * @example
 * import About from 'components/main/sections/about'
 * <About />
 * @returns {JSX.Element} An element of React.
 */
const About = () => {
  // Design with full media.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Design with tablet or more media.
  const isTabletOrMore = useMediaQuery({ minWidth: 640, maxWidth: 1280 });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <section className={sectionStyle} id='about'>
        <h2>Sobre Mí</h2>
        <p>
          ¡Hola!, ¡Que estés teniendo un buen día! ¿Qué? ¿Quién soy? Soy un
          apasionado por la tecnología, juegos y programación.
        </p>
        <p>
          Interesado en aprender las mejores técnicas y más eficientes de
          programación en la web. Iterando sobre cada detalle. Con el objectivo
          del producto final en mente.
        </p>
        <p>
          Estos son algunos de los conocimientos que dispongo actualmente, ¡Pero
          no son todos!:
        </p>
        <aside>
          <ul>
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>ReactJS</li>
            <li>C#</li>
            <a href='https://github.com/PeterDamianG'>
              <li>¡Hey puedes mirar en más detalle en mi GitHub!</li>
            </a>
          </ul>
          <Avatar />
        </aside>
        <ScrollDownSVG />
      </section>
    );
  }
  // Render if width is >= 640px.
  if (isTabletOrMore) {
    return (
      <section className={sectionStyle} id='about'>
        <h2>Sobre Mí</h2>
        <Avatar />
        <p>
          ¡Hola!, ¡Que estés teniendo un buen día! ¿Qué? ¿Quién soy? Soy un
          apasionado por la tecnología, juegos y programación.
        </p>
        <p>
          Interesado en aprender las mejores técnicas y más eficientes de
          programación en la web. Iterando sobre cada detalle. Con el objectivo
          del producto final en mente.
        </p>
        <p>
          Estos son algunos de los conocimientos que dispongo actualmente, ¡Pero
          no son todos!:
        </p>
        <ul>
          <li>Javascript</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>ReactJS</li>
          <li>C#</li>
          <a href='https://github.com/PeterDamianG'>
            <li>¡Hey puedes mirar en más detalle en mi GitHub!</li>
          </a>
        </ul>
        <ScrollDownSVG />
      </section>
    );
  }
  return (
    <section className={sectionStyle} id='about'>
      <h2>Sobre Mí</h2>
      <p>
        ¡Hola!, ¡Que estés teniendo un buen día! ¿Qué? ¿Quién soy? Soy un
        apasionado por la tecnología, juegos y programación.
      </p>
      <p>
        Interesado en aprender las mejores técnicas y más eficientes de
        programación en la web. Iterando sobre cada detalle. Con el objectivo
        del producto final en mente.
      </p>
      <p>
        Estos son algunos de los conocimientos que dispongo actualmente, ¡Pero
        no son todos!:
      </p>
      <ul>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>C#</li>
        <li>
          ¡Hey puedes mirar en más detalle en mi{' '}
          <a href='https://github.com/PeterDamianG'>GitHub!</a>
        </li>
      </ul>
      <ScrollDownSVG />
    </section>
  );
};

export default About;
