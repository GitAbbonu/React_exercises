import React from "react";
// Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.

class Age extends React.Component {
  render() {
    return (
      <>
        {this.props.age <= 18 && <p>You are very young!</p>}
        {this.props.age > 18 && <p>Your age is: {this.props.age}</p>}
      </>
    );
  }
}

export default Age;
