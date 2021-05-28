import ThemeChanger from './ThemeChanger';
import MenuIconSVG from './Drawer';
import { headerflex, title } from './appbar.module.css';

const AppBar = () => (
  <header className={headerflex}>
    <h4 className={title}>Peter DG</h4>
    <aside>
      <ThemeChanger />
      <MenuIconSVG />
    </aside>
  </header>
);

export default AppBar;
