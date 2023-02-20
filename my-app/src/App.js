import "./App.css";

function App() {
  const a = 1;
  const b = 2;

  function sum(a, b) {
    return <h2>{a + b}</h2>;
  }

  return <div>{sum(a, b)}</div>;
}

export default App;
