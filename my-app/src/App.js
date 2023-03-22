import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Welcome from "./Welcome";

// Add a new Route to the /counter path that renders the Counter component from useState 01.

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
