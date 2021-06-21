/** @module Sections/About */
import { useMediaQuery } from 'react-responsive';
import ScrollDownSVG from 'components/icons/utils/scrolldown';
import Avatar from './avatar/Avatar';
import ListSkill from './listskill/ListSkills';
import ContentAbout from './content/ContentAbout';
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
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <section className={sectionStyle} id='about'>
        <h2>Sobre Mí</h2>
        <ContentAbout />
        <article>
          <ListSkill />
          <Avatar />
        </article>
        <ScrollDownSVG />
      </section>
    );
  }
  // Render normal.
  return (
    <section className={sectionStyle} id='about'>
      <h2>Sobre Mí</h2>
      <Avatar />
      <ContentAbout />
      <ListSkill />
      <ScrollDownSVG />
    </section>
  );
};

export default About;
