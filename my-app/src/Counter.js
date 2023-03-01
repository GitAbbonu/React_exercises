import React from "react";
// Create a Counter class component with an internal state containing a count property, initialized to 0. The Counter component should render the count property within an h1 tag, and the count property should be incremented by 1 every second;

class Counter extends React.Component {
  state = {
    countWithoutCallback: 0,
    countWithCallback: 0,
  };

  componentDidMount() {
    // Intervallo senza callback
    setInterval(() => {
      this.setState({
        countWithoutCallback: this.state.countWithoutCallback + 1,
      });
    }, 1000);

    // Intervallo con callback
    setInterval(() => {
      this.setState((prevState) => ({
        countWithCallback: prevState.countWithCallback + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Conteggio senza callback: {this.state.countWithoutCallback}</h1>
        <h1>Conteggio con callback: {this.state.countWithCallback}</h1>
      </div>
    );
  }
}

export default Counter;
