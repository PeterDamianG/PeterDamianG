import { SVGProps } from 'react';
/**
 * Use a icon SVG like a Telegram Link button.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import TelegramSVG from 'components/icons/socialmedia/TelegramSVG'
 * <TelegramSVG height={32} width={32} />
 */
const TelegramSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label='Telegram Button'
    role='button'
    height={24}
    width={24}
    viewBox='0 0 24 24'
    {...props}
  >
    <title>Enviarme un mensaje a Telegram.</title>
    <path d='M12 24a12 12 0 100-24 12 12 0 000 24zM5.5 11.7L17 7.3c.5-.2 1 .1.8 1l-2 9.2c-.1.7-.5.8-1 .5l-3-2.2-1.5 1.4c-.2.2-.3.3-.6.3l.2-3 5.6-5c.2-.3 0-.4-.4-.2l-6.9 4.3-3-1c-.6-.1-.6-.5.2-.9z' />
  </svg>
);

export default TelegramSVG;
