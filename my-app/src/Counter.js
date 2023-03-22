import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterDisplay count={count} setCount={setCount} />
    </div>
  );
}

export default Counter;
