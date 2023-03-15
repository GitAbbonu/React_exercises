// Rewrite the ClickCounter  as a function component, and use the useState hook to track the state of the counter.
import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const plusOne = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={plusOne}>+</button>
    </div>
  );
}

export default ClickCounter;
