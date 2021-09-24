import Image from 'next/image';
import BaseCard from '@components/ui/basecard/BaseCard';
import Button from '@components/ui/button/Button';
import * as css from './cardproyect.module.css';

type CardProps = {
  name: string;
  URL: string;
  description: string;
  tech: string;
  img: string;
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
    {[name].map((key) => (
      <div key={key} className={css['containerAll']}>
        <Image
          src={img}
          alt={name}
          width={1280}
          height={764}
          layout='responsive'
          objectFit='cover'
          objectPosition='top'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAkAAJ8AmzsOXcYAAAAASUVORK5CYII='
          quality='50'
        />
        <div className={css['containerData']}>
          <h3 className={css['title']}>{name}</h3>
          <h4 className={css['subtitle']}>{tech}</h4>
          <p className={css['dataDesc']}>{description}</p>
          <a href={URL} target='_blank' rel='noreferrer'>
            <Button>¡Ir a Repositorio!</Button>
          </a>
        </div>
      </div>
    ))}
  </BaseCard>
);

export default CardProyect;
