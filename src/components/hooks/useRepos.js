/** @module Hooks */
import useSWR from 'swr';
/**
 * A wrapper for a function fetcher, anyone native, custom, axios, etc.
 * @function fetcher
 * @example
 * useSWR('api/user', fetcher);
 * @returns {JSX.Element} A fetcher funcion.
 */
const fetcher = (...args) => fetch(...args).then((res) => res.json());
/**
 * useRepos Hook - Hook to fetching data using SWR.
 * @function useRepos
 * @example
 * const { data, isLoading, isError } = useRepos();
 *
 * if(isLoading) return <Spinner />
 * if (isError) return <Error />
 * return <img src={data.avatar} />
 * @returns {{user, isLoading, isError}} Object Promise with three attributes {data, isLoading, isError}
 */
const useRepos = () => {
  // Hook SWR.
  const { data, error } = useSWR(
    'https://api.github.com/users/peterdamiang/repos',
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false },
  );
  // Return object to use.
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useRepos;
