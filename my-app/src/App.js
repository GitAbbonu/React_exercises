import React, { useState } from "react";
import GithubUser from "./GithubUser";

function App() {
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
      <input name="search" value={user} onChange={inputChangeHandler} />
      <button onClick={searchHandler}>Search</button>
      <button onClick={resetHandler}>Reset</button>

      {search && <GithubUser username={user} />}
    </div>
  );
}

export default App;
