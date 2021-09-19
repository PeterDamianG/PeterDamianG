import * as css from './basecard.module.css';
/**
 * Generic background card.
 * @example
 * import BaseCard from 'components/ui/basecard/BaseCard'
 * <BaseCard />
 */
const BaseCard = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => <aside className={css['BaseCard']}>{children}</aside>;

export default BaseCard;
