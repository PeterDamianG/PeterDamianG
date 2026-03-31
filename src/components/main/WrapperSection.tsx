import { useState, useEffect } from 'react';
import ErrorBoundary from '@components/utils/errorfallback/ErrorBoundary';
import setPathHash from '@components/utils/setPathHash';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import style from './wrappersection.module.css';

type WrapperProps = {
  children: JSX.Element;
  hash: 'hero' | 'about' | 'proyects' | 'contact';
  threshold?: number;
};
/**
 * Wrapper para secciones con IntersectionObserver nativo y ErrorBoundary.
 * Monta el contenido de la sección sólo cuando entra al viewport (lazy mount).
 * Actualiza el hash de la URL cuando la sección es visible.
 * @param props.children - Componente de la sección.
 * @param props.hash - Hash de la sección para navegación por URL.
 * @param props.threshold - Porcentaje de visibilidad para activar [0, 1].
 * @example
 * import WrapperSection from 'main/WrapperSection'
 * <WrapperSection hash='about'>
 *   <About />
 * </WrapperSection>
 */
const WrapperSection = ({
  children,
  hash,
  threshold = 0.8,
}: WrapperProps): JSX.Element => {
  const [exist, setExist] = useState(false);
  const { ref, inView } = useIntersectionObserver(threshold);

  useEffect(() => {
    if (inView && !exist) {
      setExist(true);
      setPathHash(hash);
    }
  }, [inView, exist, hash]);

  return (
    <ErrorBoundary>
      <section
        ref={ref}
        className={`${style.sectionStyle}${exist ? ` ${style.visible}` : ''}`}
        id={hash}
        aria-label={hash}
      >
        {exist && <ErrorBoundary>{children}</ErrorBoundary>}
      </section>
    </ErrorBoundary>
  );
};

export default WrapperSection;
