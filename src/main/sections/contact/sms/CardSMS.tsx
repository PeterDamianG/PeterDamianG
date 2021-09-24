import BaseCard from '@components/ui/basecard/BaseCard';
import WrapperIcon from '@components/ui/wrappericon/WrapperIcon';
import WhatsAppSVG from '@icons/socialmedia/WhatsAppSVG';
import TelegramSVG from '@icons/socialmedia/TelegramSVG';
import * as css from './cardsms.module.css';
/**
 * A card in section contact with contain instant message icons/links.
 * @example
 * import CardSMS from 'main/sections/contact/social/CardSMS'
 * <CardSMS />
 */
const CardSMS = (): JSX.Element => (
  <BaseCard>
    <div className={css['cardFlex']}>
      <h3 className={css['title']}>Mensajería Directa</h3>
      <WrapperIcon>
        <a href='https://bit.ly/3kwROHZ' target='_blank' rel='noreferrer'>
          <WhatsAppSVG />
        </a>
        <a href='https://t.me/PeterDamianG' target='_blank' rel='noreferrer'>
          <TelegramSVG />
        </a>
      </WrapperIcon>
    </div>
  </BaseCard>
);

export default CardSMS;
