import style from './content.module.css';
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
          &quot;<span className={style.prop}>dependencies</span>&quot;: &#123;
        </p>
        <p>
          &nbsp;&nbsp;&quot;<span className={style.prop}>next</span>&quot;:
          &quot;
          <span className={style.val}>^11.1.2</span>&quot;,
        </p>
        <p>
          &nbsp;&nbsp;&quot;<span className={style.prop}>react</span>&quot;:
          &quot;
          <span className={style.val}>^17.0.2</span>&quot;,
        </p>
        <p>
          &nbsp;&nbsp;&quot;<span className={style.prop}>react-dom</span>
          &quot;: &quot;
          <span className={style.val}>^17.0.2</span>&quot;,
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
          <span className={style.prop}>&lt;div&gt;</span>Bad for sections
          <span className={style.prop}>&lt;/div&gt;</span>
        </p>
        <p>
          <span className={style.prop}>&lt;section&gt;</span>Good
          <span className={style.prop}>&lt;/section&gt;</span>
        </p>
        <p>
          <span className={style.prop}>&lt;p&gt;</span>Bad for Footer
          <span className={style.prop}>&lt;/p&gt;</span>
        </p>
        <p>
          <span className={style.prop}>&lt;footer&gt;</span>
          <span className={style.prop}>&lt;small&gt;</span>
        </p>
        <p>&nbsp;&nbsp;Good © Peter DG</p>
        <p>
          <span className={style.prop}>&lt;/small&gt;</span>
          <span className={style.prop}>&lt;/footer&gt;</span>
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
          <span className={style.prop}>
            &lt;abbr title=
            <span className={style.val}>&quot;Buenos Aires&quot;</span>
          </span>
          <span className={style.prop}>&gt;</span>BS AS
          <span className={style.prop}>&lt;/abbr&gt;</span>
        </p>
        <p>
          <span className={style.prop}>
            &lt;base href=
            <span className={style.val}>
              &quot;https://peterdg.com.ar/&quot;
            </span>
            &nbsp;/&gt;
          </span>
        </p>
        <p>
          <span className={style.prop}>&lt;cite&gt;</span>
        </p>
        <p>&nbsp;&nbsp;You Aren&apos;t Gonna Need It.</p>
        <p>
          <span className={style.prop}>&lt;/cite&gt;</span>
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
          <span className={style.prop}>
            &lt;canvas id=
            <span className={style.val}>&quot;myCanvas&quot;</span>
            &gt;
          </span>
          <br />
          &nbsp;&nbsp;Your browser does not support canvas tag.
        </p>
        <p>
          <span className={style.prop}>&lt;/canvas&gt;</span>
        </p>
        <p>
          <span className={style.prop}>
            &lt;svg width=
            <span className={style.val}>&quot;100&quot;</span>
            <span className={style.prop}>
              &nbsp;height=<span className={style.val}>&quot;100&quot;</span>
            </span>
            &gt;
          </span>
        </p>
        <p>
          &nbsp; &nbsp;
          <span className={style.prop}>
            &lt;circle cx=
            <span className={style.val}>&quot;50&quot;</span>
            <span className={style.prop}>
              &nbsp;cy=<span className={style.val}>&quot;50&quot;</span>
            </span>
            <span className={style.prop}>
              &nbsp;r=<span className={style.val}>&quot;50&quot;</span>
            </span>
            &nbsp;/&gt;
          </span>
        </p>
        <p>
          <span className={style.prop}>&lt;/svg&gt;</span>
        </p>
        <p>
          <span className={style.prop}>
            &lt;img src=
            <span className={style.val}>&quot;/profile.jpg&quot;</span>
            <span className={style.prop}>
              &nbsp;alt=<span className={style.val}>&quot;My photo&quot;</span>
            </span>
            &nbsp;/&gt;
          </span>
        </p>
      </>
    ),
  },
  {
    title: 'TypeScript',
    caption: '¿Podrá TypeScript convertirse en el estándar web?',
    html: (): JSX.Element => (
      <>
        <p>
          <span className={style.reserve}>
            const&nbsp;
            <span className={style.val}>MyComponent&nbsp;</span>
            <span className={style.reserve}>():&nbsp;</span>
            <span className={style.prop}>JSX.Element&nbsp;</span>
            <span className={style.reserve}>=&gt; &#123;</span>
          </span>
        </p>
        <p>
          <span>&nbsp;&nbsp;/* Your Component... */</span>
        </p>
        <p>
          <span className={style.reserve}>&#125;;</span>
        </p>
        <br />
        <p>
          <span className={style.reserve}>export default&nbsp;</span>
          <span className={style.val}>MyComponent</span>
          <span className={style.reserve}>;</span>
        </p>
      </>
    ),
  },
] as const;

export default content;
