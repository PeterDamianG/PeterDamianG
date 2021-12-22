import { SVGProps } from 'react';
import { useMediaQuery } from 'react-responsive';
import style from '../style/placeholder.module.css';
/**
 * Svg img to use like a placeholder loader.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import ContactPlacerholderSVG from 'components/placeholders/contact/ContactPlacerholderSVG'
 * <ContactPlacerholderSVG />
 */
const ContactPlacerholderSVG = (
  props: SVGProps<SVGSVGElement>,
): JSX.Element => {
  const isHighMedia = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return (
    <svg className={style.placeholder} viewBox='0 0 400 400' {...props}>
      <title>Estoy cargando, no te impacientes.</title>
      {isHighMedia ? (
        <>
          <rect x='110' y='10' rx='20' ry='20' width='200' height='40' />
          <rect x='-120' y='60' rx='20' ry='20' width='650' height='120' />
          <rect x='-120' y='200' rx='20' ry='20' width='650' height='120' />
          <rect x='20' y='350' rx='20' ry='20' width='400' height='20' />
          <circle cx='560' cy='320' r='18' />
        </>
      ) : (
        <>
          <rect x='110' y='0' rx='20' ry='20' width='200' height='40' />
          <rect x='30' y='50' rx='20' ry='20' width='350' height='120' />
          <rect x='30' y='200' rx='20' ry='20' width='350' height='120' />
          <rect x='100' y='400' rx='20' ry='20' width='200' height='20' />
          <circle cx='350' cy='400' r='15' />
        </>
      )}
    </svg>
  );
};

export default ContactPlacerholderSVG;
