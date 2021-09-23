import Image from 'next/image';
import CardNav from './CardNav';
import BaseCard from '@components/ui/basecard/BaseCard';
import * as css from './card.module.css';
type CardProps = {
  name: string;
  URL: string;
  description: string;
  tech: string;
  img: string;
  upIndex: Function;
  downIndex: Function;
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
 *   upIndex={handleUpIndex}
 *   downIndex={handleDownIndex}
 * />
 */
const Card = ({
  name,
  URL,
  description,
  tech,
  img,
  upIndex,
  downIndex,
}: CardProps): JSX.Element => (
  <BaseCard>
    {[name].map((key) => (
      <div key={key}>
        <h3>{name}</h3>
        <h4>{tech}</h4>
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAkAAJ8AmzsOXcYAAAAASUVORK5CYII='
        />
        <p>{description}</p>
        <CardNav upIndex={upIndex} downIndex={downIndex} URL={URL} />
      </div>
    ))}
  </BaseCard>
);

export default Card;
