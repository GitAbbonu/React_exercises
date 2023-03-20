import React, { useEffect, useState } from "react";

function GithubUser({ list }) {
  const [items, setItems] = useState(["Lista di nomi GitHub"]);

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

  function addToItems(list) {
    list.map((el) => getGitUser(el));
  }

  useEffect(() => {
    addToItems(list);
    console.log(items);
  }, [list]);

  const printItems = items.map((el, id) => {
    return <li key={id}>{el}</li>;
  });

  return (
    <div>
      <ul>{printItems}</ul>
    </div>
  );
}

export default GithubUser;
