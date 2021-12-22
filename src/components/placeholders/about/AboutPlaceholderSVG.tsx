import { SVGProps } from 'react';
import { useMediaQuery } from 'react-responsive';
import style from '../style/placeholder.module.css';
/**
 * Svg img to use like a placeholder loader.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import AboutPlacerholderSVG from 'components/placeholders/about/AboutPlacerholderSVG'
 * <AboutPlacerholderSVG />
 */
const AboutPlacerholderSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  const isHighMedia = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return (
    <svg className={style.placeholder} viewBox='0 0 400 400' {...props}>
      <title>Estoy cargando, no te impacientes.</title>
      {isHighMedia ? (
        <>
          <rect x='110' y='10' rx='20' ry='20' width='200' height='40' />
          <circle cx='210' cy='120' r='60' />
          <rect x='-100' y='200' rx='20' ry='20' width='650' height='30' />
          <rect x='-100' y='250' rx='20' ry='20' width='650' height='30' />
          <rect x='-100' y='300' rx='20' ry='20' width='650' height='30' />
          <circle cx='215' cy='375' r='18' />
        </>
      ) : (
        <>
          <rect x='110' y='-50' rx='20' ry='20' width='200' height='40' />
          <circle cx='210' cy='120' r='80' />
          <rect x='50' y='220' rx='20' ry='20' width='300' height='40' />
          <rect x='50' y='280' rx='20' ry='20' width='300' height='40' />
          <rect x='50' y='340' rx='20' ry='20' width='300' height='40' />
          <rect x='50' y='400' rx='20' ry='20' width='300' height='40' />
          <circle cx='205' cy='480' r='15' />
        </>
      )}
    </svg>
  );
};

export default AboutPlacerholderSVG;
