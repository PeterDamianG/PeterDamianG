import TitleSection from '@components/ui/titlesection/TitleSection';
import ScrollDownSVG from '@icons/utils/scrolldown/ScrollDownSVG';
import ExternalLinkSVG from '@icons/utils/link/ExternalLinkSVG';
import { CERTIFICATIONS } from '@data/siteData';
import type { Certification } from '@data/siteData';
import style from './certifications.module.css';

const CertCard = ({ cert }: { cert: Certification }): JSX.Element => {
  const content = (
    <>
      <p className={style.certName}>
        {cert.name}
        {cert.url && (
          <span className={style.linkIcon}>
            <ExternalLinkSVG />
          </span>
        )}
      </p>
      <span className={style.certIssuer}>{cert.issuer}</span>
    </>
  );

  if (cert.url) {
    return (
      <a
        href={cert.url}
        target='_blank'
        rel='noreferrer noopener'
        className={`${style.card} ${style.cardLink}`}
        title={`Ver credencial: ${cert.name}`}
      >
        {content}
      </a>
    );
  }

  return <article className={style.card}>{content}</article>;
};

const Certifications = (): JSX.Element => (
  <>
    <TitleSection>Certificaciones</TitleSection>
    <div className={style.grid}>
      {CERTIFICATIONS.map((cert) => (
        <CertCard key={cert.name} cert={cert} />
      ))}
    </div>
    <a href='#proyects'>
      <ScrollDownSVG />
    </a>
  </>
);

export default Certifications;
