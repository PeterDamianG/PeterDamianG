import ExternalLinkSVG from '@icons/utils/link/ExternalLinkSVG';
import BaseCard from '@components/ui/basecard/BaseCard';
import style from './cardcertification.module.css';

type CardCertificationProps = {
  title: string;
  emit: string;
  emitURL: string;
  credID: string;
  URL: string;
};
/**
 * A generic component to show a card of Certification.
 * @example
 * import CardCertification from 'main/sections/about/About/cert/CardCertification'
 * import CardCertification from './CardCertification';
 *
 * {CERTIFICATIONS.map(({ id, title, emit, emitURL, credID, URL }) => (
 *    <CardCertification
 *      key={id}
 *      title={title}
 *      emit={emit}
 *      emitURL={emitURL}
 *      credID={credID}
 *      URL={URL}
 *    />
 *  ))}
 */
const CardCertification = ({
  title,
  emit,
  emitURL,
  credID,
  URL,
}: CardCertificationProps): JSX.Element => (
  <BaseCard>
    <>
      <span className={style.CardTitle}>{title}</span>
      <span className={style.CardSubtitle}>
        <a href={emitURL} target='_blank' rel='noreferrer'>
          {emit}
        </a>
      </span>
      {credID && (
        <span className={style.CardCredID}>
          ID de la credencial: <b>{credID}</b>
        </span>
      )}
      <span className={style.CardLink}>
        <a href={URL} target='_blank' rel='noreferrer'>
          Ver Credencial
          <ExternalLinkSVG />
        </a>
      </span>
    </>
  </BaseCard>
);

export default CardCertification;
