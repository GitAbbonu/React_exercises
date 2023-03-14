import React, { useState } from "react";

// Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array.

function WrapperList(props) {
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
      {props.render(
        items,
        addItemHandler,
        resetListHandler,
        removeFromListHandler
      )}
    </div>
  );
}

export default WrapperList;
