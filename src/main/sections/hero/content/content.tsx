import * as css from './content.module.css';
/**
 * A var type const for contain info set to display in section Hero.
 * @remarks
 * Limits of <p> tags in html props is 6, for effect typing.
 * @const
 * @example
 * import content from 'main/sections/hero/content/content'
 * content[0].title
 * // return "NPM"
 */
const content = [
  {
    title: 'NPM',
    caption: '¿Cómo pasamos de tres archivos, a montones de dependencias?',
    html: (): JSX.Element => (
      <>
        <p>
          &quot;<span className={css['prop']}>dependencies</span>&quot;: &#123;
        </p>
        <p>
          &nbsp;&nbsp;&quot;<span className={css['prop']}>next</span>&quot;:
          &quot;
          <span className={css['val']}>^11.1.2</span>&quot;,
        </p>
        <p>
          &nbsp;&nbsp;&quot;<span className={css['prop']}>react</span>&quot;:
          &quot;
          <span className={css['val']}>^17.0.2</span>&quot;,
        </p>
        <p>
          &nbsp;&nbsp;&quot;<span className={css['prop']}>react-dom</span>
          &quot;: &quot;
          <span className={css['val']}>^17.0.2</span>&quot;,
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp; . &nbsp;&nbsp; .</p>
      </>
    ),
  },
  {
    title: 'HTML 5',
    caption: '¿Cuándo la semantica cambie, re-adaptaremos todas las webs?',
    html: (): JSX.Element => (
      <>
        <p>
          <span className={css['prop']}>&lt;div&gt;</span>Bad for sections
          <span className={css['prop']}>&lt;/div&gt;</span>
        </p>
        <p>
          <span className={css['prop']}>&lt;section&gt;</span>Good
          <span className={css['prop']}>&lt;/section&gt;</span>
        </p>
        <p>
          <span className={css['prop']}>&lt;p&gt;</span>Bad for Footer
          <span className={css['prop']}>&lt;/p&gt;</span>
        </p>
        <p>
          <span className={css['prop']}>&lt;footer&gt;</span>
          <span className={css['prop']}>&lt;small&gt;</span>
        </p>
        <p>&nbsp;&nbsp;Good © Peter DG</p>
        <p>
          <span className={css['prop']}>&lt;/small&gt;</span>
          <span className={css['prop']}>&lt;/footer&gt;</span>
        </p>
      </>
    ),
  },
  {
    title: '<br />',
    caption: '¿Hace cuánto que no utilizo algunas etiquetas?',
    html: (): JSX.Element => (
      <>
        <p>
          <span className={css['prop']}>
            &lt;abbr title=
            <span className={css['val']}>
              &quot;World Health Organization&quot;
            </span>
          </span>
          <span className={css['prop']}>&gt;</span>WHO
          <span className={css['prop']}>&lt;/abbr&gt;</span>
        </p>
        <p>
          <span className={css['prop']}>
            &lt;base href=
            <span className={css['val']}>
              &quot;https://peterdg.com.ar/&quot;
            </span>
            &nbsp;/&gt;
          </span>
        </p>
        <p>
          <span className={css['prop']}>&lt;cite&gt;</span>
        </p>
        <p>&nbsp;&nbsp;You Aren&apos;t Gonna Need It.</p>
        <p>
          <span className={css['prop']}>&lt;/cite&gt;</span>
        </p>
      </>
    ),
  },
  {
    title: 'Images',
    caption: '¿Cuándo aparecerá el sistema de gráficos definitivo?',
    html: (): JSX.Element => (
      <>
        <p>
          <span className={css['prop']}>
            &lt;canvas id=
            <span className={css['val']}>&quot;myCanvas&quot;</span>
            &gt;
          </span>
          <br /> <br />
          &nbsp;&nbsp;Your browser does not support canvas tag.
        </p>
        <p>
          <span className={css['prop']}>&lt;/canvas&gt;</span>
        </p>
        <p>
          <span className={css['prop']}>
            &lt;svg width=
            <span className={css['val']}>&quot;100&quot;</span>
            <span className={css['prop']}>
              &nbsp;height=<span className={css['val']}>&quot;100&quot;</span>
            </span>
            &gt;
          </span>
        </p>
        <p>
          &nbsp; &nbsp;
          <span className={css['prop']}>
            &lt;circle cx=
            <span className={css['val']}>&quot;50&quot;</span>
            <span className={css['prop']}>
              &nbsp;cy=<span className={css['val']}>&quot;50&quot;</span>
            </span>
            <span className={css['prop']}>
              &nbsp;r=<span className={css['val']}>&quot;50&quot;</span>
            </span>
            &nbsp;/&gt;
          </span>
        </p>
        <p>
          <span className={css['prop']}>&lt;/svg&gt;</span>
        </p>
        <p>
          <span className={css['prop']}>
            &lt;img src=
            <span className={css['val']}>&quot;/profile.jpg&quot;</span>
            <span className={css['prop']}>
              &nbsp;alt=<span className={css['val']}>&quot;My photo&quot;</span>
            </span>
            &nbsp;/&gt;
          </span>
        </p>
      </>
    ),
  },
] as const;

export default content;
