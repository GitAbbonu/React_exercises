import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

function GithubUser() {
  const { username } = useParams();

  console.log(username);

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

  return (
    <div>
      {user && <h1>{user.name}</h1>}
      <Outlet />
    </div>
  );
}

export default GithubUser;
