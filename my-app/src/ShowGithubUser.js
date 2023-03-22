import React, { useState } from "react";
import GithubUser from "./GithubUser";

function ShowGithubUser() {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState(false);

  const searchHandler = () => {
    setSearch(true);
  };
  const resetHandler = () => {
    setSearch(false);
    setUser("");
  };

  const inputChangeHandler = (ev) => {
    const { value } = ev.target;

    setUser(value);
  };

  return (
    <div>
      <div>Scrivi nell url</div>
      <input name="search" value={user} onChange={inputChangeHandler} />
      <button onClick={searchHandler}>Search</button>
      <button onClick={resetHandler}>Reset</button>

      {search && <GithubUser />}
    </div>
  );
}

export default ShowGithubUser;
