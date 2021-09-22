import BaseCard from '@components/ui/basecard/BaseCard';
import SocialMedia from '@components/ui/socialmedia/SocialMedia';
import * as css from './cardsocial.module.css';
/**
 * A card in section contact with contain social media icons/links.
 * @example
 * import CardSocial from 'main/sections/contact/social/CardSocial'
 * <CardSocial />
 */
const CardSocial = (): JSX.Element => (
  <BaseCard>
    <div className={css['cardFlex']}>
      <h3 className={css['title']}>Redes Sociales</h3>
      <SocialMedia />
    </div>
  </BaseCard>
);

export default CardSocial;
