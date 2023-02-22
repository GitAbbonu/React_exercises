import Hello from "./Hello";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Pippo</strong>} age={30} />
    </div>
  );
}

export default App;
