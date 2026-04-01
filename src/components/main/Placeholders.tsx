import { lazy, Suspense } from 'react';
import HomePlacerholderSVG from '@components/placeholders/home/HomePlaceholderSVG';
import AboutPlacerholderSVG from '@components/placeholders/about/AboutPlaceholderSVG';
import ProyectsPlacerholderSVG from '@components/placeholders/proyects/ProyectsPlaceholderSVG';
import ContactPlaceholderSVG from '@components/placeholders/contact/ContactPlaceholderSVG';

const HeroSection = lazy(() => import('./sections/hero/Hero'));
const AboutSection = lazy(() => import('./sections/about/About'));
const CertificationsSection = lazy(
  () => import('./sections/certifications/Certifications'),
);
const ProyectsSection = lazy(() => import('./sections/proyects/Proyects'));
const ContactSection = lazy(() => import('./sections/contact/Contact'));

/**
 * Componentes de sección con lazy loading usando React.lazy + Suspense.
 * Cada uno muestra un placeholder SVG mientras carga el chunk.
 * @example
 * import { Hero } from 'components/main/Placeholders'
 * <Hero />
 */
export const Hero = (): JSX.Element => (
  <Suspense fallback={<HomePlacerholderSVG />}>
    <HeroSection />
  </Suspense>
);

export const About = (): JSX.Element => (
  <Suspense fallback={<AboutPlacerholderSVG />}>
    <AboutSection />
  </Suspense>
);

export const Certifications = (): JSX.Element => (
  <Suspense fallback={<AboutPlacerholderSVG />}>
    <CertificationsSection />
  </Suspense>
);

export const Proyects = (): JSX.Element => (
  <Suspense fallback={<ProyectsPlacerholderSVG />}>
    <ProyectsSection />
  </Suspense>
);

export const Contact = (): JSX.Element => (
  <Suspense fallback={<ContactPlaceholderSVG />}>
    <ContactSection />
  </Suspense>
);
