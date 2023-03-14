import Hello from "./Hello";
import Sum from "./Sum";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      {/* <Hello /> */}
      {/* <Welcome name="John" age={19} /> */}
      <Sum numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </div>
  );
}

export default App;
