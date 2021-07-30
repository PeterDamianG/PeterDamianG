/** @module Pages */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { mainStyle } from '../styles/404.module.css';
/**
 * A component for simulate a 500 page Server-side error occurred. Used same style like a 404.
 * @function Page500
 */
const Page500 = () => {
  const router = useRouter();
  // State for show info about time to redirect.
  const [time, setTime] = useState(10);
  // Effect timer down.
  useEffect(() => {
    setTimeout(() => {
      if (time !== 0) setTime((prevState) => prevState - 1);
    }, 1000);
    return function cleanup() {
      clearTimeout();
    };
  }, [time]);
  // Effect redirect.
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 10000);
    return function cleanup() {
      clearTimeout();
    };
  }, [router]);
  // Render
  return (
    <main className={mainStyle}>
      <h2>500 - Un error del lado del servidor ha ocurrido.</h2>
      <p>Serás redireccionado a la página principal en {time} segundos.</p>
      <h3>Lo siento, tuvimos un error desde el servidor.</h3>
    </main>
  );
};

export default Page500;
