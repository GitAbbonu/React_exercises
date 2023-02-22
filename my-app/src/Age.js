// Extract the "Your age is " message into a new component called Age and render it within the Welcome component. Pass to the Age component the age prop that Welcome is receiving from the App component.
import React from "react";

class Age extends React.Component {
  render() {
    return <p>Your age is: {this.props.age}</p>;
  }
}

export default Age;
