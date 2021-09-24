import * as css from './wrappericon.module.css';
/**
 * An container for icons like a button links for social media networks or anothers.
 * @example
 * import WrapperIcon from 'components/ui/wrappericon/WrapperIcon'
 * <WrapperIcon>
 *  <YourSVG1 />
 *  <YourSVG2 />
 *  <YourSVG3 />
 * </WrapperIcon>
 */
const WrapperIcon = ({
  Children,
}: {
  Children: JSX.Element | JSX.Element[];
}): JSX.Element => <article className={css['wrapperIcon']}>{Children}</article>;

export default WrapperIcon;
