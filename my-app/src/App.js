// Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop.

import ClickCounter from "./ClickCounter";
// import ClickTracker from "./ClickTracker";

function App() {
  const onCounterChange = (count) => {
    console.log(count);
  };

  return (
    <div>
      <ClickCounter onCounterChange={onCounterChange} />
    </div>
  );
}

export default App;
