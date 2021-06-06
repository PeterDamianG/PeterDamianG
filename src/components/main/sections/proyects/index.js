import { useEmblaCarousel } from 'embla-carousel/react';
import { embla, emblaContainer, emblaSlide } from './proyects.module.css';

const Proyects = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className={embla} ref={emblaRef}>
      <div className={emblaContainer}>
        <div className={emblaSlide}>Slide 1</div>
        <div className={emblaSlide}>Slide 2</div>
        <div className={emblaSlide}>Slide 3</div>
      </div>
    </section>
  );
};

export default Proyects;
