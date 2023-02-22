import React from "react";
// Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".

class Welcome extends React.Component {
  render() {
    const name = this.props.name;

    const res = name === undefined || name === "" ? "Signora/e" : name;

    return (
      <>
        <p>Welcome {res}!</p>
        <p>Your age is: {this.props.age}</p>
      </>
    );
  }
}

export default Welcome;
