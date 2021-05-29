import dynamic from 'next/dynamic';
import LoaderSVG from 'components/icons/LoaderSVG';

const Hero = dynamic(() => import('components/main/sections/hero'), {
  loading: () => <LoaderSVG />,
});
const About = dynamic(() => import('components/main/sections/about'), {
  loading: () => <LoaderSVG />,
});
const Proyects = dynamic(() => import('components/main/sections/proyects'), {
  loading: () => <LoaderSVG />,
});
const Contact = dynamic(() => import('components/main/sections/contact'), {
  loading: () => <LoaderSVG />,
});

const Main = () => (
  <main>
    <Hero />
    <About />
    <Proyects />
    <Contact />
  </main>
);

export default Main;
