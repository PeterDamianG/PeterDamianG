import ThemeChanger from './themechanger';
import Drawer from './drawer';
import * as css from './appbar.module.css';

type PropsAppBar = {
  appTitle?: string;
};
/**
 * An app bar with title, theme button and drawer like a menu.
 * @param props.appTitle - Set a title for app bar.
 * @example
 * import AppBar from 'layout/appbar/AppBar'
 * <AppBar />
 * <AppBar appTitle='New Owner Name Here' />
 */
const AppBar = ({ appTitle = 'Peter DG' }: PropsAppBar): JSX.Element => (
  <header className={css['headerFlex']}>
    <a title='¡Soy yo! Haz me click para volver al inicio.' href='#hero'>
      <h1>{appTitle}</h1>
    </a>
    <article className={css['svgController']}>
      <ThemeChanger />
      <Drawer />
    </article>
  </header>
);

export default AppBar;
