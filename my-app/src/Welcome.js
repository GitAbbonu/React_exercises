// Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome: {this.props.name}! </h1>
      </div>
    );
  }
}

export default Welcome;
