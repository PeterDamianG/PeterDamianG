import MenuIconSVG from '@icons/appbar/MenuIconSVG';
import Overlay from '@components/ui/overlay/Overlay';
import useMediaQuery from '@hooks/useMediaQuery';
import ContentNav from './nav/ContentNav';
import ContentNav1280 from './nav/ContentNav1280';
/**
 * Drawer de navegación que adapta su contenido según el ancho de pantalla.
 * Desktop (≥768px): ContentNav1280. Mobile: ContentNav.
 * @example
 * import Drawer from 'layout/appbar/drawer/Drawer'
 * <Drawer />
 */
const Drawer = (): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop)
    return (
      <Overlay
        ChildrenButton={<MenuIconSVG />}
        ChildrenAside={<ContentNav1280 />}
      />
    );

  return (
    <Overlay ChildrenButton={<MenuIconSVG />} ChildrenAside={<ContentNav />} />
  );
};

export default Drawer;
