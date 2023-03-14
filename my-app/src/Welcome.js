// Rewrite the Welcome component to be a function component.
import React from "react";
import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <>
      <p>Welcome {name}!</p>

      <Age age={age} />
    </>
  );
}

export default Welcome;
