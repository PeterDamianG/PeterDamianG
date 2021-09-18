import * as css from './cardcertification.module.css';
import ExternalLinkSVG from '@icons/utils/link/ExternalLinkSVG';

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
  <li className={css['CardCertification']}>
    <span className={css['CardTitle']}>{title}</span>
    <span className={css['CardSubtitle']}>
      <a href={emitURL} target='_blank' rel='noreferrer'>
        {emit}
      </a>
    </span>
    {credID && (
      <span className={css['CardCredID']}>
        ID de la credencial: <b>{credID}</b>
      </span>
    )}
    <span className={css['CardLink']}>
      <a href={URL} target='_blank' rel='noreferrer'>
        Ver Credencial
        <ExternalLinkSVG />
      </a>
    </span>
  </li>
);

export default CardCertification;
