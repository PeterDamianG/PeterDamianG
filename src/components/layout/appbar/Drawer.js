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
          <a href='#hero' onClick={handlerCloseDrawer}>
            Principal
          </a>
          <a href='#about' onClick={handlerCloseDrawer}>
            Sobre Mí
          </a>
          <a href='#proyects' onClick={handlerCloseDrawer}>
            Proyectos
          </a>
          <a href='#contact' onClick={handlerCloseDrawer}>
            Contacto
          </a>
        </nav>
      )}
    </>
  );
};

export default Drawer;
