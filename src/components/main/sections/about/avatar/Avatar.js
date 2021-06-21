/** @module Sections/About */
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
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
  if (isDesktopOrLaptop)
    return (
      <Image
        aria-label='Avatar'
        alt='Picture of Author. Peter DG.'
        src='/me.png'
        width={150}
        height={150}
        priority
        className={avatarStyle}
      />
    );
  if (isMediumDevice)
    return (
      <Image
        aria-label='Avatar'
        alt='Picture of Author. Peter DG.'
        src='/me.png'
        width={125}
        height={125}
        priority
        className={avatarStyle}
      />
    );
  return (
    <Image
      aria-label='Avatar'
      alt='Picture of Author. Peter DG.'
      src='/me.png'
      width={100}
      height={100}
      priority
      className={avatarStyle}
    />
  );
};

export default Avatar;
