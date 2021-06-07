import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const getRepos = (id) => {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

/* function Avatar({ id }) {
   const { user, isLoading, isError } = useUser(id)

   if(isLoading) return <Spinner />
   if (isError) return <Error />
   return <img src={user.avatar} />
} */

export default getRepos;
