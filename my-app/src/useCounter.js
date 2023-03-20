import React, { useState } from "react";

// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.

function useCounter(initVal = 0) {
  const [counter, setCounter] = useState(initVal);

  const increment = () => {
    setCounter((c) => c + 1);
  };
  const decrement = () => {
    setCounter((c) => c - 1);
  };
  const reset = () => {
    setCounter(initVal);
  };

  return { counter, increment, decrement, reset };
}

export default useCounter;
