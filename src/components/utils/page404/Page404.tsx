import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import style from './page404.module.css';
/**
 * A component for simulate a 404 page error not found and redirect to index.
 * @example
 * import Page404 from 'components/utils/page404/Page404'
 * <Page404 />
 */
const Page404 = (): JSX.Element => {
  const router = useRouter();
  // State for show info about time to redirect.
  const [time, setTime] = useState(5);
  // Effect timer down.
  useEffect(() => {
    setTimeout(() => {
      if (time !== 0) setTime((prevState) => prevState - 1);
    }, 1000);
    return function cleanup(): void {
      clearTimeout();
    };
  }, [time]);
  // Effect redirect.
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
    return function cleanup(): void {
      clearTimeout();
    };
  }, [router]);
  // Render
  return (
    <main className={style.page404}>
      <h2>404 - Página no encontrada.</h2>
      <p>Serás redireccionado a la página principal en {time} segundos.</p>
      <h3>Lo siento, la página que buscabas no se encuentra.</h3>
    </main>
  );
};

export default Page404;
