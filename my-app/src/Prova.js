import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

function Prova({ initV }) {
  const { counter, increment, decrement, reset } = useCounter(initV);

  return (
    <div>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Prova;
