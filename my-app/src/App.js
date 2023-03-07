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

  const removeFromListHandler = (id) => {
    items.splice(id, 1);
    setItems([...items]);
  };

  return (
    <div>
      <TodoList
        items={items}
        onAdd={addItemHandler}
        onResetList={resetListHandler}
        removeFromList={removeFromListHandler}
      />
    </div>
  );
}

export default App;
