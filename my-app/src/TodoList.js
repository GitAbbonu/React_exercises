// Modify the TodoList by adding a "reset" button that clears the items array when clicked.

import React, { createRef } from "react";

class TodoList extends React.Component {
  _inputRef = createRef();

  submitHandler = (ev) => {
    ev.preventDefault();

    const newItem = ev.target.elements.newItem.value;

    //Blocca l'invio di stringhe vuote
    if (newItem === "") {
      return false;
    }

    this.props.onAdd(newItem);

    this.resetInputAfterAdd();
  };

  resetListHandler = () => {
    this.props.onResetList();
  };

  //delete after added new item
  resetInputAfterAdd = () => {
    this._inputRef.current.value = "";
  };

  render() {
    const items = this.props.items.map((item) => {
      return <li key={Math.random()}>{item}</li>;
    });
    //

    return (
      <div>
        <ul>{items}</ul>
        <form onSubmit={this.submitHandler}>
          <h3>Add Item:</h3>
          <input ref={this._inputRef} type={"text"} name={"newItem"} />
          <button type="submit">Add Item</button>
          <button onClick={this.resetListHandler}>Reset Lists</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
