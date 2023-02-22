import React from "react";
import Age from "./Age";
// Extract the "Your age is " message into a new component called Age and render it within the Welcome component. Pass to the Age component the age prop that Welcome is receiving from the App component.
class Welcome extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <>
        <p>Welcome {name}!</p>
        <Age age={this.props.age} />
      </>
    );
  }
}

export default Welcome;
