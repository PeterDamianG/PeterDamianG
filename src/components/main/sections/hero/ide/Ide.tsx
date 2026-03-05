import style from './ide.module.css';
/**
 * A internal component for section Hero, simulate a un ide.
 * @example
 * import Ide from 'main/sections/hero/Hero/ide/Ide'
 * <Ide />
 */
const Ide = ({
  title = 'Example',
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}): JSX.Element => (
  <section
    title='Haz me click, para leer el siguiente de mis pensamientos.'
    className={style.containerIde}
  >
    <p className={style.headerIde}>{title}</p>
    <div className={style.contentCode}>
      <code>{children}</code>
    </div>
  </section>
);

export default Ide;
