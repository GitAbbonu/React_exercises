import React from "react";
// What happens if the name prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression? Modify the value passed to the name prop so that it's contained within a strong tag.

// -Funziona lo stesso
// -Si passa con le {}  : <Welcome name={<strong>Pippo</strong>} age={30} />
class Welcome extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <>
        <p>Welcome {name}!</p>
        <p>Your age is: {this.props.age}</p>
      </>
    );
  }
}

export default Welcome;
