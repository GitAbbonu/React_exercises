import Hello from "./Hello";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Pippo</strong>} />
    </div>
  );
}

export default App;
