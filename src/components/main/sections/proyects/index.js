import { useEmblaCarousel } from 'embla-carousel/react';
import { embla, emblaContainer, emblaSlide } from './proyects.module.css';

const Proyects = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section id='proyects'>
      <h2>Proyectos</h2>
      <article className={embla} ref={emblaRef}>
        <div className={emblaContainer}>
          <div className={emblaSlide}>Slide 1</div>
          <div className={emblaSlide}>Slide 2</div>
          <div className={emblaSlide}>Slide 3</div>
        </div>
      </article>
    </section>
  );
};

export default Proyects;
