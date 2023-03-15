import React, { useEffect, useState } from "react";
// Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop.

function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  const plusOne = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    onCounterChange(count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={plusOne}>+</button>
    </div>
  );
}

export default ClickCounter;
