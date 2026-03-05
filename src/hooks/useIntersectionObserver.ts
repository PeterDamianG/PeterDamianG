import { useState, useEffect, useRef } from 'react';

type IntersectionResult = {
  ref: React.RefObject<HTMLElement>;
  inView: boolean;
};

/**
 * Hook que observa si un elemento HTML está visible en el viewport.
 * Reemplaza react-intersection-observer usando la API nativa IntersectionObserver.
 * @param threshold - Porcentaje de visibilidad requerido para considerar el elemento "en vista" [0, 1]
 */
const useIntersectionObserver = (threshold = 0.8): IntersectionResult => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold },
    );
    observer.observe(el);

    return (): void => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

export default useIntersectionObserver;
