/** @module Main/Sections/About */
import { useMediaQuery } from 'react-responsive';
import ScrollDownSVG from 'components/icons/utils/scrolldown';
import Avatar from './components/Avatar';
import ListSkill from './components/ListSkills';
import ContentAbout from './components/ContentAbout';
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
        <ContentAbout />
        <aside>
          <ListSkill />
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
        <ContentAbout />
        <ListSkill />
        <ScrollDownSVG />
      </section>
    );
  }
  return (
    <section className={sectionStyle} id='about'>
      <h2>Sobre Mí</h2>
      <ContentAbout />
      <ListSkill />
      <ScrollDownSVG />
    </section>
  );
};

export default About;
