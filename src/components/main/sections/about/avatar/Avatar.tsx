import Image from 'next/image';
import me from '@public/profile/me.jpg';
import style from './avatar.module.css';
/**
 * A component to render img Avatar.
 * @example
 * import Avatar from 'main/sections/about/avatar/Avatar'
 * <Avatar />
 */
const Avatar = (): JSX.Element => (
  <Image
    className={style.avatarStyle}
    src={me}
    aria-label='Avatar'
    alt='Picture of Author. Peter DG.'
    priority
    placeholder='blur'
  />
);

export default Avatar;
