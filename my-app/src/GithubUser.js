import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GithubUser() {
  const { username } = useParams();

  const [item, setItem] = useState("");

  async function getGitUser(gitName) {
    try {
      const url = "https://api.github.com/users/" + gitName;

      const fet = await fetch(url);
      const json = await fet.json();

      setItem(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getGitUser(username);
  }, [username]);

  // const printItems = items.map((el, id) => {
  //   return <li key={id}>{el}</li>;
  // });

  return (
    <div>
      <ul>{item.name}</ul>
    </div>
  );
}

export default GithubUser;
