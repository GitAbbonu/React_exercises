import React, { useState } from "react";

// Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states.

function useGitHubUser() {
  const [items, setItems] = useState(["Lista di nomi GitHub"]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function addToItems(list) {
    list.map((el) => getGitUser(el));
  }

  async function getGitUser(gitName) {
    setLoading(true);

    try {
      const url = "https://api.github.com/users/" + gitName;

      const fet = await fetch(url);
      const json = await fet.json();

      setLoading(false);

      setItems([...items, json.name]);
    } catch (err) {
      setError(error);
    }
  }

  return { items, setItems, addToItems, getGitUser, loading, error };
}

export default useGitHubUser;
