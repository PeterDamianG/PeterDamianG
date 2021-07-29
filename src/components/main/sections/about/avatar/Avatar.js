/** @module Sections/About */
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import me from './me.jpg';
import { avatarStyle } from './avatar.module.css';
/**
 * A component to render Avatar.
 * @function Avatar
 * @example
 * import Avatar from 'components/main/sections/about/Avatar'
 * <Avatar />
 * @returns {JSX.Element} An element of React.
 */
const Avatar = () => {
  // Design with full media.
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Design for medium device like a tablet.
  const isMediumDevice = useMediaQuery({ minWidth: 640, maxWidth: 1280 });
  // eslint-disable-next-line no-nested-ternary
  const { avatarWidth, avatarHeight } = isDesktopOrLaptop
    ? { avatarWidth: 160, avatarHeight: 175 }
    : isMediumDevice
    ? { avatarWidth: 125, avatarHeight: 135 }
    : { avatarWidth: 100, avatarHeight: 105 };
  // Render.
  return (
    <Image
      aria-label='Avatar'
      alt='Picture of Author. Peter DG.'
      src={me}
      width={avatarWidth}
      height={avatarHeight}
      priority
      className={avatarStyle}
      placeholder='blur'
    />
  );
};

export default Avatar;
