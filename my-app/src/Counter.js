import React, { useEffect, useState } from "react";
// Rewrite the Counter component from State 1 as a function component and add a side effect that initializes the interval as soon as the component renders, and clears it when the component unmounts.

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Counter;
