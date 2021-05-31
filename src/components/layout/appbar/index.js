/** @module Layout/AppBar */
import ThemeChanger from './ThemeChanger';
import MenuIconSVG from './Drawer';
import { headerFlex, titleBar, svgController } from './appbar.module.css';
/**
 * An app bar with title, theme button and drawer like a menu.
 * @function AppBar
 * @param {{string}} props.appTitle - A object with property appTitle - string, to set a title for app bar.
 * @example
 * import AppBar from 'components/layout/appbar'
 * <AppBar />
 * <AppBar appTitle='New Owner Name Here' />
 * @returns {JSX.Element} An element of React.
 */
const AppBar = ({ appTitle = 'Peter DG' }) => (
  <header className={headerFlex}>
    <h2 className={titleBar}>{appTitle}</h2>
    <aside className={svgController}>
      <ThemeChanger />
      <MenuIconSVG />
    </aside>
  </header>
);

export default AppBar;
