import React from "react";
import CounterDisplay from "./CounterDisplay";
// Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required? NOPE

// Props from App:
//initialVal={1} intervall={1000} amount={2}

class Counter extends React.Component {
  state = {
    count: this.props.initialVal,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.amount,
      });
    }, this.props.intervall);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
