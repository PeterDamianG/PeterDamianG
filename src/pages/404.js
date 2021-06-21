/** @module Pages */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { mainStyle } from '../styles/404.module.css';
/**
 * A component for simulate a 404 page error not found and redirect to index.
 * @function Page404
 * @returns {JSX.Element} An element of React.
 */
const Page404 = () => {
  const router = useRouter();
  // State for show info about time to redirect.
  const [time, setTime] = useState(5);
  // Effect
  useEffect(() => {
    setInterval(() => {
      if (time !== 0) setTime((prevState) => prevState - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval();
      clearTimeout();
      router.push('/');
    }, 5000);
    return function cleanup() {
      clearInterval();
      clearTimeout();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Render
  return (
    <main className={mainStyle}>
      <h2>404 - Página no encontrada.</h2>
      <p>Serás redireccionado a la página principal en {time} segundos.</p>
      <h3>Lo siento, no se ha encontrado lo que buscas.</h3>
    </main>
  );
};

export default Page404;
