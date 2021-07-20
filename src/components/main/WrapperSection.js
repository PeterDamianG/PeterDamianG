/** @module Sections */
import Head from 'next/head';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
/**
 * A Wrapper for add sections with intersection observer, frame motion and next/head .
 * @function WrapperSection
 * @param {Function} children - A component of react.
 * @param {String} titleText - A title for change seo, change title tag in html document.
 * @param {String} descriptionText - A description for seo, changre meta description tag in html document.
 * @param {String} hashRouter - A string to make a hash router redirection.
 * @param {Number} absoluteThreshold - A number in range [0,1], to set percent of show component to set inView true or false.
 * @param {Number} transitionTime - A number fo set en ms, time of animation.
 * @example
 * import WrapperSection from 'components/WrapperSection'
 * <WrapperSection />
 */
const WrapperSection = ({
  children,
  titleText,
  descriptionText,
  hashRouter,
  absoluteThreshold = 0.6,
  transitionTime = 0.5,
}) => {
  const setPathHash = (stringHash) => {
    window.location.hash = stringHash;
  };
  return (
    <InView threshold={absoluteThreshold}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : ''}
          transition={{ duration: transitionTime }}
        >
          {children}
          {inView && (
            <>
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
  );
};

export default WrapperSection;
