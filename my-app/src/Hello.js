// Modify the Hello component so that it shows a p tag below the h1 tag with the message "What a beautiful day!".
import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>What a beautiful day!</p>
      </div>
    );
  }
}

export default Hello;
