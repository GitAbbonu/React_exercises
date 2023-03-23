import useSWR from "swr";

// Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user.

function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );

  const fetchGithubUser = () => {
    mutate();
  };

  return {
    data,
    error,
    isLoading: !data && !error,
    onFetchUser: fetchGithubUser,
  };
}

export default useGithubUser;
