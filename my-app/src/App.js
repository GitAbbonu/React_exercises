import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [items, setItems] = useState(["Aggiungi elementi alla lista"]);

  const addItemHandler = (newItem) => {
    setItems([...items, newItem]);
  };

  const resetListHandler = () => {
    setItems([""]);
  };

  return (
    <div>
      <TodoList
        items={items}
        onAdd={addItemHandler}
        onResetList={resetListHandler}
      />
    </div>
  );
}

export default App;
