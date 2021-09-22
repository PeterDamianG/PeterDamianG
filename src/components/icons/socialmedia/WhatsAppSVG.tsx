import { SVGProps } from 'react';
/**
 * Use a icon SVG like a WhatsApp Link button.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import WhatsAppSVG from 'components/icons/socialmedia/WhatsAppSVG'
 * <WhatsAppSVG height={32} width={32} />
 */
const WhatsAppSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label='WhatsApp Button'
    role='button'
    viewBox='0 0 512 512'
    {...props}
  >
    <title>Enviarme un mensaje a WhatsApp.</title>
    <path d='M256 0A256 256 0 0049 406l-32 95 98-31A256 256 0 10256 0zm149 362c-6 17-31 31-50 36-14 2-31 5-90-20-75-31-124-107-127-112-4-5-31-41-31-77s19-55 26-63c7-6 17-9 27-9h8c8 1 11 1 16 13l23 55c2 4 4 9 2 14l-9 12-11 12c-3 4-7 9-3 16 4 8 20 32 42 52 28 25 51 33 60 37 6 2 13 2 18-3l20-26c5-8 11-9 18-6 7 2 44 21 51 24 8 4 13 6 14 9 2 3 2 18-4 36z' />
  </svg>
);

export default WhatsAppSVG;
