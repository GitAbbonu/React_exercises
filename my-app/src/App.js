import Hello from "./Hello";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Pippo" age={30} />
    </div>
  );
}

export default App;
