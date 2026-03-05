import style from './listcertification.module.css';
import CERTIFICATIONS from './certifications';
import CardCertification from './CardCertification';
/**
 * A component to show list of ListCertification.
 * @example
 * import ListCertification from 'main/sections/about/About/cert/ListCertification'
 * <ListCertification />
 */
const ListCertification = (): JSX.Element => (
  <span className={style.listCertification}>
    {CERTIFICATIONS.map(({ id, title, emit, emitURL, credID, URL }) => (
      <CardCertification
        key={id}
        title={title}
        emit={emit}
        emitURL={emitURL}
        credID={credID}
        URL={URL}
      />
    ))}
  </span>
);

export default ListCertification;
