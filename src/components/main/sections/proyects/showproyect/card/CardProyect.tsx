import BaseCard from '@components/ui/basecard/BaseCard';
import Overlay from '@components/ui/overlay/Overlay';
import Button from '@components/ui/button/Button';
import ExternalLinkSVG from '@icons/utils/link/ExternalLinkSVG';
import WrapperIMG from './WrapperIMG';
import style from './cardproyect.module.css';

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
    <div key={name} className={style.containerAll}>
      <WrapperIMG name={name} img={img} />
      <Overlay
        ChildrenButton={<ExternalLinkSVG className={style.buttonOverlay} />}
        ChildrenAside={
          <div className={style.cardOverlay}>
            <WrapperIMG name={name} img={img} quality={100} objectFit='fill' />
          </div>
        }
      />
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