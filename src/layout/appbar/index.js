/** @module Layout/AppBar */
import ThemeChanger from './themechanger';
import Drawer from './drawer';
import { headerFlex, svgController } from './appbar.module.css';
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
    <h1>
      <a title='¡Soy yo! Haz me click para volver al inicio.' href='#hero'>
        {appTitle}
      </a>
    </h1>
    <article className={svgController}>
      <ThemeChanger />
      <Drawer />
    </article>
  </header>
);

export default AppBar;
