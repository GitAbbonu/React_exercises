import React from "react";
import Age from "./Age";

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
