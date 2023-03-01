import React from "react";
// Modify the Counter component so that the initial value of the counter, the increment interval and the increment amount are passed as props to the component.

// Props from App:
//initialVal={1} intervall={1000} amount={2}

class Counter extends React.Component {
  state = {
    count: this.props.initialVal,
  };

  //Correggere errore:
  //   Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the Counter component.
  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({
        count: this.state.count + this.props.amount,
      }));
    }, this.props.intervall);
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
