import BaseCard from '@components/ui/basecard/BaseCard';
import Button from '@components/ui/button/Button';
import Image from 'next/image';
import style from './cardproyect.module.css';

type CardProps = {
  name: string;
  URL: string;
  description: string;
  tech: string;
  img: StaticImageData;
};
/**
 * A component to render card proyect.
 * @example
 * import CardProyect from 'main/sections/showproyect/card/CardProyect'
 * <CardProyect
 *   name={name}
 *   URL={URL}
 *   description={description}
 *   tech={tech}
 *   img={img}
 * />
 */
const CardProyect = ({
  name,
  URL,
  description,
  tech,
  img,
}: CardProps): JSX.Element => (
  <BaseCard>
    <div key={name} className={style.containerAll}>
      <div className={style.containerIMG}>
        <Image
          aria-label='Proyect'
          priority
          quality={50}
          src={img}
          alt={name}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          objectPosition='center top'
        />
      </div>
      <div className={style.containerData}>
        <h3 className={style.title}>{name}</h3>
        <h4 className={style.subtitle}>{tech}</h4>
        <p className={style.dataDesc}>{description}</p>
        <a href={URL} target='_blank' rel='noreferrer'>
          <Button>¡Ir a Repositorio!</Button>
        </a>
      </div>
    </div>
  </BaseCard>
);

export default CardProyect;
