import React from "react";

function CounterDisplay({ count, setCount }) {
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((x) => x + 1)}>+</button>
    </>
  );
}

export default CounterDisplay;
