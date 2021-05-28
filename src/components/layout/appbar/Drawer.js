import { useState } from 'react';
import MenuIconSVG from 'components/icons/appbar/MenuIconSVG';
import { svg } from './svg.module.css';
import style from './drawer.module.css';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerOpenDrawer = () => setIsOpen(true);
  const handlerCloseDrawer = () => setIsOpen(false);

  return (
    <>
      <MenuIconSVG className={svg} onClick={handlerOpenDrawer} />
      {isOpen && (
        <nav className={style.sidenav}>
          <button
            type='button'
            className={style.closebtn}
            onClick={handlerCloseDrawer}
          >
            Back
          </button>
          <a href='#2' onClick={handlerCloseDrawer}>
            About
          </a>
          <a href='#3' onClick={handlerCloseDrawer}>
            Services
          </a>
          <a href='#4' onClick={handlerCloseDrawer}>
            Clients
          </a>
          <a href='#5' onClick={handlerCloseDrawer}>
            Contact
          </a>
        </nav>
      )}
    </>
  );
};

export default Drawer;
