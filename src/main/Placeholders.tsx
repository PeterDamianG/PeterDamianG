import dynamic from 'next/dynamic';
import HomePlacerholderSVG from '@components/placeholders/home/HomePlaceholderSVG';
import AboutPlacerholderSVG from '@components/placeholders/about/AboutPlaceholderSVG';
import ProyectsPlacerholderSVG from '@components/placeholders/proyects/ProyectsPlaceholderSVG';
import ContactPlaceholderSVG from '@components/placeholders/contact/ContactPlaceholderSVG';
/**
 * A export component with next dinamic and set a custom placeholder for section home.
 * @example
 * import { Hero } from 'components/main/Placeholders'
 * <Hero />
 */
export const Hero = dynamic(() => import('./sections/hero/Hero'), {
  loading: () => <HomePlacerholderSVG />,
});
/**
 * A export component with next dinamic and set a custom placeholder for section about.
 * @example
 * import { About } from 'components/main/Placeholders'
 * <About />
 */
export const About = dynamic(() => import('./sections/about/About'), {
  loading: () => <AboutPlacerholderSVG />,
});
/**
 * A export component with next dinamic and set a custom placeholder for section proyects.
 * @example
 * import { Proyects } from 'components/main/Placeholders'
 * <Proyects />
 */
export const Proyects = dynamic(() => import('./sections/proyects/Proyects'), {
  loading: () => <ProyectsPlacerholderSVG />,
});
/**
 * A export component with next dinamic and set a custom placeholder for section contact.
 * @example
 * import { Contact } from 'components/main/Placeholders'
 * <Contact />
 */
export const Contact = dynamic(() => import('./sections/contact/Contact'), {
  loading: () => <ContactPlaceholderSVG />,
});
