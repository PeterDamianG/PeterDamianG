import { SVGProps } from 'react';
/**
 * A icon decorator to info for user that is a link.
 * @param props - A object type SVGProps, with propieties pass to svg tag.
 * @example
 * import ExternalLinkSVG from 'components/icons/appbar/ExternalLinkSVG'
 * <ExternalLinkSVG height={32} width={32} />
 */
const ExternalLinkSVG = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    aria-label='External Link'
    role='button'
    height={24}
    width={24}
    viewBox='0 -3 24 24'
    fill='#0a66c2'
    stroke='#0a66c2'
    {...props}
  >
    <title>Redirecciono hacia la certificación externa a esta web.</title>
    <path d='M20 3h-5a1 1 0 100 2h3L8 14a1 1 0 102 2l9-10v3a1 1 0 102 0V4a1 1 0 00-1-1zM5 3L3 5v14l2 2h14l2-2v-6a1 1 0 10-2 0v6H5V5h6a1 1 0 100-2H5z' />
  </svg>
);

export default ExternalLinkSVG;
