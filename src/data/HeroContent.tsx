import style from './herocontent.module.css';
/**
 * A var type const for contain info set to display in section Hero.
 * @remarks
 * Limits of <li> tags in html props is 6, for effect typing.
 * @const
 * @example
 * import HeroContent from 'data/HeroContent'
 * HeroContent[0].title
 * // return "NPM"
 */
const HeroContent = [
  {
    title: 'NPM',
    caption: '¿Cómo pasamos de tres archivos, a montones de dependencias?',
    html: (): JSX.Element => (
      <ul>
        <li>
          &quot;<span className={style.prop}>dependencies</span>&quot;: &#123;
        </li>
        <li>
          &nbsp;&nbsp;&quot;<span className={style.prop}>next</span>&quot;:
          &quot;
          <span className={style.val}>^11.1.2</span>&quot;,
        </li>
        <li>
          &nbsp;&nbsp;&quot;<span className={style.prop}>react</span>&quot;:
          &quot;
          <span className={style.val}>^17.0.2</span>&quot;,
        </li>
        <li>
          &nbsp;&nbsp;&quot;<span className={style.prop}>react-dom</span>
          &quot;: &quot;
          <span className={style.val}>^17.0.2</span>&quot;,
        </li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp; . &nbsp;&nbsp; .</li>
      </ul>
    ),
  },
  {
    title: 'HTML 5',
    caption: '¿Cuándo la semantica cambie, re-adaptaremos todas las webs?',
    html: (): JSX.Element => (
      <ul>
        <li>
          <span className={style.prop}>&lt;div&gt;</span>Bad for sections
          <span className={style.prop}>&lt;/div&gt;</span>
        </li>
        <li>
          <span className={style.prop}>&lt;section&gt;</span>Good
          <span className={style.prop}>&lt;/section&gt;</span>
        </li>
        <li>
          <span className={style.prop}>&lt;p&gt;</span>Bad for Footer
          <span className={style.prop}>&lt;/p&gt;</span>
        </li>
        <li>
          <span className={style.prop}>&lt;footer&gt;</span>
          <span className={style.prop}>&lt;small&gt;</span>
        </li>
        <li>&nbsp;&nbsp;Good © Peter DG</li>
        <li>
          <span className={style.prop}>&lt;/small&gt;</span>
          <span className={style.prop}>&lt;/footer&gt;</span>
        </li>
      </ul>
    ),
  },
  {
    title: '<br />',
    caption: '¿Hace cuánto que no utilizo algunas etiquetas?',
    html: (): JSX.Element => (
      <ul>
        <li>
          <span className={style.prop}>
            &lt;abbr title=
            <span className={style.val}>&quot;Buenos Aires&quot;</span>
          </span>
          <span className={style.prop}>&gt;</span>BS AS
          <span className={style.prop}>&lt;/abbr&gt;</span>
        </li>
        <li>
          <span className={style.prop}>
            &lt;base href=
            <span className={style.val}>
              &quot;https://peterdg.com.ar/&quot;
            </span>
            &nbsp;/&gt;
          </span>
        </li>
        <li>
          <span className={style.prop}>&lt;cite&gt;</span>
        </li>
        <li>&nbsp;&nbsp;You Aren&apos;t Gonna Need It.</li>
        <li>
          <span className={style.prop}>&lt;/cite&gt;</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Images',
    caption: '¿Cuándo aparecerá el sistema de gráficos definitivo?',
    html: (): JSX.Element => (
      <ul>
        <li>
          <span className={style.prop}>
            &lt;canvas id=
            <span className={style.val}>&quot;myCanvas&quot;</span>
            &gt;
          </span>
          <br />
          &nbsp;&nbsp;Your browser does not support canvas tag.
        </li>
        <li>
          <span className={style.prop}>&lt;/canvas&gt;</span>
        </li>
        <li>
          <span className={style.prop}>
            &lt;svg width=
            <span className={style.val}>&quot;100&quot;</span>
            <span className={style.prop}>
              &nbsp;height=<span className={style.val}>&quot;100&quot;</span>
            </span>
            &gt;
          </span>
        </li>
        <li>
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
        </li>
        <li>
          <span className={style.prop}>&lt;/svg&gt;</span>
        </li>
        <li>
          <span className={style.prop}>
            &lt;img src=
            <span className={style.val}>&quot;/profile.jpg&quot;</span>
            <span className={style.prop}>
              &nbsp;alt=<span className={style.val}>&quot;My photo&quot;</span>
            </span>
            &nbsp;/&gt;
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: 'TypeScript',
    caption: '¿Podrá TypeScript convertirse en el estándar web?',
    html: (): JSX.Element => (
      <ul>
        <li>
          <span className={style.reserve}>
            const&nbsp;
            <span className={style.val}>MyComponent&nbsp;</span>
            <span className={style.reserve}>():&nbsp;</span>
            <span className={style.prop}>JSX.Element&nbsp;</span>
            <span className={style.reserve}>=&gt; &#123;</span>
          </span>
        </li>
        <li>
          <span>&nbsp;&nbsp;/* Your Component... */</span>
        </li>
        <li>
          <span className={style.reserve}>&#125;;</span>
        </li>
        <br />
        <li>
          <span className={style.reserve}>export default&nbsp;</span>
          <span className={style.val}>MyComponent</span>
          <span className={style.reserve}>;</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Frameworks',
    caption: '¿Por qué reinventar las ruedas? Usemos Frameworks.',
    html: (): JSX.Element => (
      <ul>
        <li>
          <span className={style.reserve}>import&nbsp;</span>
          <span>&#123; NestFactory as nf &#125;&nbsp;</span>
          <span className={style.reserve}>from&nbsp;</span>
          <span className={style.prop}>&apos;@nestjs/core&apos;</span>
          <span>;</span>
        </li>
        <br />
        <li>
          <span className={style.reserve}>async function</span>
          <span className={style.prop}>&nbsp;bootstrap()&nbsp;</span>
          <span>&#123;</span>
        </li>
        <li>
          <span className={style.reserve}>&nbsp;&nbsp;const</span>
          <span>&nbsp;app =&nbsp;</span>
          <span className={style.reserve}>await&nbsp;</span>
          <span>nf.</span>
          <span className={style.prop}>create</span>
          <span>(AppModule);</span>
        </li>
        <li>
          <span className={style.reserve}>&nbsp;&nbsp;await&nbsp;</span>
          <span>app.</span>
          <span className={style.prop}>listen(3000)</span>
          <span>;</span>
        </li>
        <li>
          <span>&#125;</span>
        </li>
      </ul>
    ),
  },
] as const;

export default HeroContent;
