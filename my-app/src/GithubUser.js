import React, { useEffect, useState } from "react";
import useGitHubUser from "./useGitHubUser";

function GithubUser({ list }) {
  const { items, addToItems } = useGitHubUser();

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
