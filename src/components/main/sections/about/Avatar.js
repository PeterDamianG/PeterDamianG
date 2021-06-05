/** @module Main/Sections/About */
import { avatarStyle } from './avatar.module.css';
/**
 * A component to render Avatar.
 * @function Avatar
 * @example
 * import Avatar from 'components/main/sections/about/Avatar'
 * <Avatar />
 * @returns {JSX.Element} An element of React.
 */
const Avatar = () => (
  <img
    role='figure'
    aria-label='Avatar'
    alt='Peter DG'
    src='./me.png'
    className={avatarStyle}
  />
);

export default Avatar;
