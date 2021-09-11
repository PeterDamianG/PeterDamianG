/** @module Layout/AppBar */
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const ContentNav = dynamic(() => import('./nav/ContentNav'));
const ContentNav1280 = dynamic(() => import('./nav/ContentNav1280'));
/**
 * A container navigation separate by resolution of navigation in drawer.
 * @example
 * import ContainerNav from 'layout/appbar/drawer/ContainerNav'
 * <ContainerNav close={handleClose} />
 */
const ContainerNav = ({ close }: { close: Function }): JSX.Element => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Show design for 1280 or more.
  if (isDesktopOrLaptop) return <ContentNav1280 close={close} />;
  // Normal design return.
  return <ContentNav close={close} />;
};

export default ContainerNav;
