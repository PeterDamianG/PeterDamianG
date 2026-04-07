import TitleSection from '@components/ui/titlesection/TitleSection';
import ScrollDownSVG from '@icons/utils/scrolldown/ScrollDownSVG';
import { EXPERIENCES } from '@data/siteData';
import type { Experience as ExperienceType } from '@data/siteData';
import style from './experience.module.css';

const ExperienceItem = ({
  exp,
}: {
  exp: ExperienceType;
}): JSX.Element => (
  <article className={style.item}>
    <span className={style.dot} />
    <div className={style.header}>
      <h3 className={style.role}>{exp.role}</h3>
      <span className={style.company}>{exp.company}</span>
    </div>
    <p className={style.meta}>
      {exp.type} &middot; {exp.period}
      <br />
      {exp.location} &middot; {exp.modality}
    </p>
    <ul className={style.description}>
      {exp.description.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </article>
);

const Experience = (): JSX.Element => (
  <>
    <TitleSection>Experiencia</TitleSection>
    <div className={style.timeline}>
      {EXPERIENCES.map((exp) => (
        <ExperienceItem key={exp.company} exp={exp} />
      ))}
    </div>
    <a href='#certifications'>
      <ScrollDownSVG />
    </a>
  </>
);

export default Experience;
