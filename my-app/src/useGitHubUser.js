import React, { useState } from "react";

// Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03 into a custom hook called useGithubUser.

function useGitHubUser() {
  const [items, setItems] = useState(["Lista di nomi GitHub"]);

  function addToItems(list) {
    list.map((el) => getGitUser(el));
  }

  async function getGitUser(gitName) {
    try {
      const url = "https://api.github.com/users/" + gitName;

      const fet = await fetch(url);
      const json = await fet.json();

      setItems([...items, json.name]);
    } catch (err) {
      console.log(err);
    }
  }

  return { items, setItems, addToItems, getGitUser };
}

export default useGitHubUser;
