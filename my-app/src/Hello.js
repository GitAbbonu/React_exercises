// Extract the "What a beautiful day!" message into a new component called Message and render it within the Hello component.
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
