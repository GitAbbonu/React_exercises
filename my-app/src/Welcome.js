import React from "react";
// Set a default value for the name prop
class Welcome extends React.Component {
  render() {
    const name = this.props.name;

    const res = name === undefined || name === "" ? "Signora/e" : name;

    return <p>Welcome {res}!</p>;
  }
}

export default Welcome;
