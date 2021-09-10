/** @module Sections */
import { useState } from 'react';
import Head from 'next/head';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

type WrapperProps = {
  children: JSX.Element | JSX.Element[];
  titleText: string;
  descriptionText: string;
  hashRouter: 'hero' | 'about' | 'proyects' | 'contact';
  IDPath: 'hero' | 'about' | 'proyects' | 'contact';
  absoluteThreshold?: number;
  transitionTime?: number;
};
/**
 * A Wrapper for add sections with intersection observer, frame motion and next/head .
 * @param children - A component of react.
 * @param titleText - A title for change seo, change title tag in html document.
 * @param descriptionText - A description for seo, changre meta description tag in html document.
 * @param hashRouter - A string to make a hash router redirection.
 * @param absoluteThreshold - A number in range [0,1], to set percent of show component to set inView true or false.
 * @param transitionTime - A number fo set en ms, time of animation.
 * @example
 * import WrapperSection from 'components/WrapperSection'
 * <WrapperSection />
 */
const WrapperSection = ({
  children,
  titleText,
  descriptionText,
  hashRouter,
  absoluteThreshold = 0.75,
  transitionTime = 1,
  IDPath,
}: WrapperProps): JSX.Element => {
  const [exist, isExist] = useState(false);
  const setPathHash = (stringHash: string): void => {
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${stringHash}`);
    } else {
      window.location.hash = `#${stringHash}`;
    }
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <InView threshold={absoluteThreshold}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={exist ? { opacity: 1 } : ''}
            transition={{ duration: transitionTime }}
            style={{ height: '100vh', scrollSnapAlign: 'center' }}
            id={IDPath}
          >
            {exist && children}
            {inView && (
              <>
                {isExist(true)}
                <Head>
                  <title>{titleText}</title>
                  <meta name='description' content={descriptionText} />
                </Head>
                {setPathHash(hashRouter)}
              </>
            )}
          </motion.div>
        )}
      </InView>
    </ErrorBoundary>
  );
};

export default WrapperSection;
