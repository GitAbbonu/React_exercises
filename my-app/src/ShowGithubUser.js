import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function ShowGithubUser() {
  const [list, setList] = useState(["GitAbbonu", "marcobonni"]);
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

  const printList = list.map((item, index) => {
    return (
      <li key={index}>
        <Link to={`/users/${item}`}>{item}</Link>
      </li>
    );
  });

  return (
    <div>
      <input name="search" value={user} onChange={inputChangeHandler} />
      <button onClick={addToListHandler}>Search</button>

      <ul>{printList}</ul>
      <Outlet />
    </div>
  );
}
export default ShowGithubUser;
