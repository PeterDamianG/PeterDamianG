import style from './avatar.module.css';
/**
 * Componente que renderiza el avatar del autor.
 * @example
 * import Avatar from 'main/sections/about/avatar/Avatar'
 * <Avatar />
 */
const Avatar = (): JSX.Element => (
  <picture>
    <source srcSet='profile/me.webp' type='image/webp' />
    <img
      className={style.avatarStyle}
      src='profile/me.jpg'
      aria-label='Avatar'
      alt='Foto del autor, Peter Damián Gómez.'
      loading='eager'
      width={200}
      height={200}
    />
  </picture>
);

export default Avatar;
