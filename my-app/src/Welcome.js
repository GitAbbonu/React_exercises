import React from "react";
import Age from "./Age";
// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65.
class Welcome extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <>
        <p>Welcome {name}!</p>
        {this.props.age >= 18 && this.props.age < 65 && (
          <Age age={this.props.age} />
        )}
      </>
    );
  }
}

export default Welcome;
