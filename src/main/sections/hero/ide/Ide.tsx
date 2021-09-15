import * as css from './ide.module.css';
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
  <section className={css['containerIde']}>
    <p className={css['headerIde']}>{title}</p>
    <div className={css['contentCode']}>
      <code>{children}</code>
    </div>
  </section>
);

export default Ide;
