//Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.

import React from "react";

class ClickTracker extends React.Component {
  state = {
    pressed: "",
  };

  btnHandler = (ev) => {
    const btn = ev.target.value;
    // console.log(btn);
    this.setState(() => {
      return {
        pressed: btn,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>The last button was: {this.state.pressed}</h1>
        <button value={"Button-1"} onClick={this.btnHandler}>
          Button 1
        </button>
        <button value={"Button-2"} onClick={this.btnHandler}>
          Button 2
        </button>
        <button value={"Button-3"} onClick={this.btnHandler}>
          Button 3
        </button>
        <button value={""} onClick={this.btnHandler}>
          Reset
        </button>
      </div>
    );
  }
}

export default ClickTracker;
