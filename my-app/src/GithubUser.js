import React from "react";
import { useParams } from "react-router-dom";
import useGithubUser from "./useGithubUser";

function GithubUser() {
  const { username } = useParams();

  const { data, error, isLoading, onFetchUser } = useGithubUser(username);

  function getUserDataHandle() {
    onFetchUser();
  }

  return (
    <div>
      <button onClick={getUserDataHandle}>Load user data</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>There has been an error</h3>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}

export default GithubUser;
