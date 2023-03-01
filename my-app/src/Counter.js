import React from "react";
import CounterDisplay from "./CounterDisplay";
// Extract the h1 tag showing the count state variable into a new component called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.

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
