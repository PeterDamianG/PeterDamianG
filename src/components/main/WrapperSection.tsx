import { useState } from 'react';
import Head from 'next/head';
import { InView } from 'react-intersection-observer';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/utils/errorfallback/ErrorFallback';
import style from './wrappersection.module.css';

type WrapperProps = {
  children: JSX.Element;
  title: string;
  description: string;
  hash: 'hero' | 'about' | 'proyects' | 'contact';
  threshold?: number;
};
/**
 * A Wrapper for add sections with intersection observer, frame motion and next/head .
 * @param props.children - A component of react.
 * @param props.title - A title for change seo, change title tag in html document.
 * @param props.description - A description for seo, changre meta description tag in html document.
 * @param props.hash - A string to make a hash router redirection.
 * @param props.threshold - A number in range [0,1], to set percent of show component to set inView true or false.
 * @example
 * import WrapperSection from 'main/WrapperSection'
 * <WrapperSection
 *   title='Sección Sobre Mí - Peter Damián Gómez'
 *   description='Sección sobre mí de la web personal de Peter Damián Gómez. Un extracto sobre mí persona y algo de información.'
 *   hash='about'
 * >
 *  <About />
 * </WrapperSection>
 */
const WrapperSection = ({
  children,
  title,
  description,
  hash,
  threshold = 0.25,
}: WrapperProps): JSX.Element => {
  // State for check element exist to render or not.
  const [exist, isExist] = useState(false);
  // Function to change history in browser.
  const setPathHash = (stringHash: string): void => {
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${stringHash}`);
    } else {
      window.location.hash = `#${stringHash}`;
    }
  };
  // Render.
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <InView threshold={threshold}>
        {({ inView, ref }): JSX.Element => (
          <section ref={ref} className={style.sectionStyle} id={hash}>
            {exist && children}
            {inView && (
              <>
                {isExist(true)}
                <Head>
                  <title>{title}</title>
                  <meta name='description' content={description} />
                </Head>
                {setPathHash(hash)}
              </>
            )}
          </section>
        )}
      </InView>
    </ErrorBoundary>
  );
};

export default WrapperSection;
