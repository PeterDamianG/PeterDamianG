import Image from 'next/image';
import me from '@public/profile/me.jpg';
import * as css from './avatar.module.css';
/**
 * A component to render img Avatar.
 * @example
 * import Avatar from 'main/sections/about/avatar/Avatar'
 * <Avatar />
 */
const Avatar = (): JSX.Element => (
  <Image
    className={css['avatarStyle']}
    src={me}
    aria-label='Avatar'
    alt='Picture of Author. Peter DG.'
    priority
    placeholder='blur'
    quality='50'
  />
);

export default Avatar;