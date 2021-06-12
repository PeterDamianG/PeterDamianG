/** @module Pages */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
/**
 * A component for redirect to index.
 * @function Page404
 * @returns {JSX.Element} An element of React.
 */
const Page404 = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return <h1>404 - Page Not Found</h1>;
};

export default Page404;
