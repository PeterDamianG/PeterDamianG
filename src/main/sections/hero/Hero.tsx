import dynamic from 'next/dynamic';
import LoaderSpinner from '@components/icons/utils/loader/LoaderSpinnerSVG';
import { useMediaQuery } from 'react-responsive';

const HeroLow = dynamic(() => import('./HeroLow'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
const HeroHigh = dynamic(() => import('./HeroHigh'), {
  loading: () => <LoaderSpinner />,
  ssr: false,
});
/**
 * A component to render section hero by resolution.
 * @example
 * import Hero from 'main/sections/hero/Hero'
 * <Hero />
 */
const Hero = (): JSX.Element => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  // Show design for 1280 or more.
  if (isDesktopOrLaptop) return <HeroHigh />;
  // Normal design return.
  return <HeroLow />;
};

export default Hero;
