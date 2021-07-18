/** @module Sections */
import Head from 'next/head';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
/**
 * A Wrapper for add sections with intersection observer, frame motion and next/head .
 * @function WrapperSection
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
          transition={{ duration: 1 }}
        >
          {children}
          {inView && (
            <Head>
              <title>{titleText}</title>
              <meta name='description' content={descriptionText} />
            </Head>
          )}
          {inView && setPathHash(hashRouter)}
        </motion.div>
      )}
    </InView>
  );
};

export default WrapperSection;
