import React, { useState } from "react";

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
