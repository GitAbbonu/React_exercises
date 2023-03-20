import React, { useState } from "react";
import GithubUser from "./GithubUser";

function App() {
  const [list, setList] = useState([""]);
  const [user, setUser] = useState("");

  const inputChangeHandler = (ev) => {
    const { value } = ev.target;
    setUser(value);
  };

  const addToListHandler = () => {
    if (user === "") {
      return false;
    }
    setList([...list, user]);
    setUser("");
  };

  return (
    <div>
      <input name="search" value={user} onChange={inputChangeHandler} />
      <button onClick={addToListHandler}>Search</button>

      <GithubUser list={list} />
    </div>
  );
}

export default App;
