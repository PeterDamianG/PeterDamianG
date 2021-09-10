/** @module Sections/About */
import { useMediaQuery } from 'react-responsive';
import ScrollDownSVG from '@icons/utils/scrolldown/ScrollDownSVG';
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
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  // Render if width is >= 1280px.
  if (isDesktopOrLaptop) {
    return (
      <section className={sectionStyle}>
        <h2>Sobre Mí</h2>
        <ContentAbout />
        <article>
          <ListSkill />
          <Avatar />
        </article>
        <ScrollDownSVG hash='proyects' />
      </section>
    );
  }
  // Render normal.
  return (
    <section className={sectionStyle}>
      <h2>Sobre Mí</h2>
      {isPortrait && <Avatar />}
      <ContentAbout />
      <ListSkill />
      <ScrollDownSVG hash='proyects' />
    </section>
  );
};

export default About;
