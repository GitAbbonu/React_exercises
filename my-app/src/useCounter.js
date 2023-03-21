import React, { useCallback, useState } from "react";

//Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback to memoize the functions used to increment, decrement and reset the counter.
function useCounter(initVal = 0) {
  const [counter, setCounter] = useState(initVal);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);
  const decrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);
  const reset = useCallback(() => {
    setCounter(initVal);
  }, [initVal]);

  return { counter, increment, decrement, reset };
}

export default useCounter;
