import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import Overlay from '@components/ui/overlay/Overlay';
import dynamic from 'next/dynamic';
import LoaderSpinner from '@components/icons/utils/loader/LoaderSpinnerSVG';
import { useMediaQuery } from 'react-responsive';

const ContentNav = dynamic(() => import('./nav/ContentNav'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
const ContentNav1280 = dynamic(() => import('./nav/ContentNav1280'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
/**
 * An drawer for contain a menu to navigate using component Overlay and render by resolution.
 * @example
 * import Drawer from 'layout/appbar/drawer/Drawer'
 * <Drawer />
 */
const Drawer = (): JSX.Element => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Show design for 1280 or more.
  if (isDesktopOrLaptop)
    return (
      <Overlay
        ChildrenButton={<MenuIconSVG />}
        ChildrenAside={<ContentNav1280 />}
      />
    );
  // Normal design return.
  return (
    <Overlay ChildrenButton={<MenuIconSVG />} ChildrenAside={<ContentNav />} />
  );
};

export default Drawer;
