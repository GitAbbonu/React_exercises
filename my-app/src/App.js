import Hello from "./Hello";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Welcome name="John" age={20} />
    </div>
  );
}

export default App;
