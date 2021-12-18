import { SVGProps } from 'react';
import { useMediaQuery } from 'react-responsive';
/**
 * Svg img to use like a placeholder loader.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import ProyectsPlacerholderSVG from 'components/placeholders/proyects/ProyectsPlacerholderSVG'
 * <ProyectsPlacerholderSVG />
 */
const ProyectsPlacerholderSVG = (
  props: SVGProps<SVGSVGElement>,
): JSX.Element => {
  const isHighMedia = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return (
    <svg className='placeholder' viewBox='0 0 400 400' {...props}>
      <title>Estoy cargando, no te impacientes.</title>
      {isHighMedia ? (
        <>
          <rect x='110' y='10' rx='20' ry='20' width='200' height='40' />
          <circle cx='-180' cy='200' r='20' />
          <rect x='-135' y='60' rx='20' ry='20' width='650' height='250' />
          <circle cx='560' cy='200' r='20' />
          <circle cx='200' cy='375' r='18' />
        </>
      ) : (
        <>
          <rect x='110' y='-20' rx='20' ry='20' width='200' height='40' />
          <circle cx='25' cy='225' r='18' />
          <rect x='80' y='60' rx='20' ry='20' width='250' height='350' />
          <circle cx='375' cy='225' r='18' />
          <circle cx='205' cy='480' r='15' />
        </>
      )}
    </svg>
  );
};

export default ProyectsPlacerholderSVG;
