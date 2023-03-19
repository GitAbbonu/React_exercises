import React, { useEffect, useState } from "react";

// Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  async function getGitUser(gitName) {
    try {
      const url = "https://api.github.com/users/" + gitName;

      const fet = await fetch(url);
      const json = await fet.json();

      setUser(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getGitUser(username);
    console.log(user);
  }, [username]);

  return <div>{user && <h1>{user.name}</h1>}</div>;
}

export default GithubUser;
