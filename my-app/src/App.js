import Hello from "./Hello";
import Welcome from "./Welcome";

// Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.

function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Pippo" />
    </div>
  );
}

export default App;
