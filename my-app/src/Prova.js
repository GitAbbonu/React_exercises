import React, { useState, useEffect } from "react";
import useControlled from "./useControlled";
import useCounter from "./useCounter";

function Prova({ initV }) {
  const { counter, increment, decrement, reset } = useCounter(initV);
  const { name, password, updName, updPassword } = useControlled();

  const [inputs, setInps] = useState({
    username: "",
    password: "",
  });

  const inputChangeHandler = (ev) => {
    const { name, value } = ev.target;

    setInps((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>

      <div>
        <input
          value={inputs.username}
          name={"username"}
          onChange={inputChangeHandler}
        />
        <button onClick={() => updName(inputs.username)}>Update Name </button>
        <input
          type={"password"}
          value={inputs.password}
          name={"password"}
          onChange={inputChangeHandler}
        />
        <button onClick={() => updPassword(inputs.password)}>
          Update Password
        </button>
        <ul>
          <li>{name}</li>
          <li>{password}</li>
        </ul>
      </div>
    </div>
  );
}

export default Prova;
