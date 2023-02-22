import React from "react";
import Message from "./Message";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Message />
      </div>
    );
  }
}

export default Hello;
