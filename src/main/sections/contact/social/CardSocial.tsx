import BaseCard from '@components/ui/basecard/BaseCard';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import style from './cardsocial.module.css';
/**
 * A card in section contact with contain social media icons/links.
 * @example
 * import CardSocial from 'main/sections/contact/social/CardSocial'
 * <CardSocial />
 */
const CardSocial = (): JSX.Element => (
  <BaseCard>
    <div className={style.cardFlex}>
      <h3 className={style.title}>Redes Sociales</h3>
      <SocialMedia />
    </div>
  </BaseCard>
);

export default CardSocial;
