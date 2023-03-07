// Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. When the button is clicked, the event handler should add the value of the input tag to the items array.

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
        </form>
      </div>
    );
  }
}

export default TodoList;
