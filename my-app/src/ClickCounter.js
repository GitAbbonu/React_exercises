//Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.

import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  plusOne = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.plusOne}>+</button>
      </div>
    );
  }
}

export default ClickCounter;
