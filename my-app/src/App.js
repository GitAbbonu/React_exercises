import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [items, setItems] = useState(["Aa", "Bb", "Cc", "Dd"]);

  const addItemHandler = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <TodoList items={items} onAdd={addItemHandler} />
    </div>
  );
}

export default App;
