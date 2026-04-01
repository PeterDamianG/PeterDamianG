import TitleSection from '@components/ui/titlesection/TitleSection';
import ScrollDownSVG from '@icons/utils/scrolldown/ScrollDownSVG';
import { CERTIFICATIONS } from '@data/siteData';
import style from './certifications.module.css';

const Certifications = (): JSX.Element => (
  <>
    <TitleSection>Certificaciones</TitleSection>
    <div className={style.grid}>
      {CERTIFICATIONS.map((cert) => (
        <article key={cert.name} className={style.card}>
          <p className={style.certName}>{cert.name}</p>
          <span className={style.certIssuer}>{cert.issuer}</span>
        </article>
      ))}
    </div>
    <a href='#proyects'>
      <ScrollDownSVG />
    </a>
  </>
);

export default Certifications;
