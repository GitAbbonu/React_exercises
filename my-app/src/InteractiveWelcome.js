// Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };

  handlerName = (ev) => {
    const name = ev.target.value;
    this.setState(() => {
      return { name: name };
    });
  };

  controlledName(name) {
    const res = name.length > 10 ? "nome troppo lungo" : name;

    return res;
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerName} />
        <Welcome name={this.controlledName(this.state.name)} />
      </div>
    );
  }
}

export default InteractiveWelcome;
