import { SVGProps } from 'react';
import { useMediaQuery } from 'react-responsive';
/**
 * Svg img to use like a placeholder loader.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import HomePlacerholderSVG from 'components/placeholders/home/HomePlacerholderSVG'
 * <HomePlacerholderSVG />
 */
const HomePlacerholderSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isHighMedia = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return (
    <svg className='placeholder' viewBox='0 0 400 400' {...props}>
      <title>Estoy cargando, no te impacientes.</title>
      {isHighMedia ? (
        <>
          <rect x='-120' y='40' rx='20' ry='20' width='269' height='37' />
          <rect x='-60' y='120' rx='20' ry='20' width='152' height='29' />
          <circle cx='-90' cy='230' r='30' />
          <circle cx='10' cy='230' r='30' />
          <circle cx='110' cy='230' r='30' />
          <rect x='250' y='40' rx='6' ry='6' width='350' height='250' />
          <rect x='-10' y='305' rx='20' ry='20' width='500' height='35' />
          <circle cx='215' cy='375' r='18' />
        </>
      ) : (
        <>
          <rect x='75' y='-20' rx='20' ry='20' width='269' height='37' />
          <rect x='135' y='30' rx='20' ry='20' width='152' height='29' />
          <circle cx='120' cy='130' r='20' />
          <circle cx='210' cy='130' r='20' />
          <circle cx='300' cy='130' r='20' />
          {isPortrait ? (
            <>
              <rect x='30' y='180' rx='4' ry='4' width='350' height='180' />
              <rect x='40' y='380' rx='20' ry='20' width='320' height='30' />
              <circle cx='205' cy='430' r='15' />
            </>
          ) : (
            <>
              <rect x='40' y='250' rx='20' ry='20' width='320' height='35' />
              <circle cx='205' cy='350' r='15' />
            </>
          )}
        </>
      )}
    </svg>
  );
};

export default HomePlacerholderSVG;
