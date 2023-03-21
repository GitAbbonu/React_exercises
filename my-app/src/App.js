import React, { useState } from "react";
import CarDetails from "./CarDetails";
// import GithubUser from "./GithubUser";
// import Prova from "./Prova";

function App() {
  // const [list, setList] = useState([""]);
  // const [user, setUser] = useState("");

  // const inputChangeHandler = (ev) => {
  //   const { value } = ev.target;
  //   setUser(value);
  // };

  // const addToListHandler = () => {
  //   if (user === "") {
  //     return false;
  //   }
  //   setList([...list, user]);
  //   setUser("");
  // };

  const car1 = {
    modello: "sportivo",
    anno: 2000,
    colore: "#9E0A0A",
  };
  const car2 = {
    modello: "berlina",
    anno: 2005,
    colore: "#0A2BEF",
  };
  const car3 = {
    modello: "coupè",
    anno: 1950,
    colore: "#006FE6",
  };

  return (
    <div>
      {/* <input name="search" value={user} onChange={inputChangeHandler} />
      <button onClick={addToListHandler}>Search</button>

      <GithubUser list={list} />

      <Prova initV={10} /> */}
      <CarDetails initialData={car2} />
    </div>
  );
}

export default App;
