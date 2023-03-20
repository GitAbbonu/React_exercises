// Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.

import React, { useState, useEffect } from "react";

function useControlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const updName = (newName) => {
    setName(newName);
  };
  const updPassword = (newPassword) => {
    setPassword(newPassword);
  };

  return { name, password, updName, updPassword };
}

export default useControlled;
