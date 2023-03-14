import React, { createRef } from "react";

class ToDoList extends React.Component {
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

  removeButtonHandler = (id) => {
    this.props.removeFromList(id.index);
  };

  //delete after added new item
  resetInputAfterAdd = () => {
    this._inputRef.current.value = "";
  };

  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <li key={index}>
          <span>{item}</span>
          <button
            onClick={() => {
              this.removeButtonHandler({ index });
            }}
            type="submit"
          >
            remove
          </button>
        </li>
      );
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

export default ToDoList;
