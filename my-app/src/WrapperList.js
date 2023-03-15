import React, { useState } from "react";

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
