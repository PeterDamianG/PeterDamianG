import BaseCard from '@components/ui/basecard/BaseCard';
import Button from '@components/ui/button/Button';
import style from './cardproyect.module.css';

type CardProps = {
  name: string;
  URL: string;
  description: string;
  tech: string;
  img: string;
};
/**
 * Tarjeta de proyecto con imagen, nombre, tecnologías y enlace al repositorio.
 * @example
 * import CardProyect from 'main/sections/showproyect/card/CardProyect'
 * <CardProyect name={name} URL={URL} description={description} tech={tech} img={img} />
 */
const CardProyect = ({
  name,
  URL,
  description,
  tech,
  img,
}: CardProps): JSX.Element => (
  <BaseCard>
    <div className={style.containerAll}>
      <div className={style.containerIMG}>
        <picture>
          <source srcSet={`${img}.webp`} type='image/webp' />
          <img
            aria-label={`Imagen del proyecto ${name}`}
            src={`${img}.jpg`}
            alt={name}
            loading='lazy'
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              width: '100%',
              height: '100%',
            }}
          />
        </picture>
      </div>
      <div className={style.containerData}>
        <h3 className={style.title}>{name}</h3>
        <h4 className={style.subtitle}>{tech}</h4>
        <p className={style.dataDesc}>{description}</p>
        <a href={URL} target='_blank' rel='noreferrer noopener' aria-label={`Ver repositorio de ${name} en GitHub`}>
          <Button>¡Ir a Repositorio!</Button>
        </a>
      </div>
    </div>
  </BaseCard>
);

export default CardProyect;
