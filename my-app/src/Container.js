// Modify the Container component so that it can display a title received within the title prop.
import React from "react";
import "./container.css";

class Container extends React.Component {
  render() {
    return (
      <div className="cont">
        <h1>{this.props.title}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
