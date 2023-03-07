// Implement an UncontrolledLogin component that implements all the operations of the Login component, but does so using uncontrolled components.

import React from "react";

class UncontrolledLogin extends React.Component {
  formSubimitHandler = (ev) => {
    ev.preventDefault();

    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;
    const check = ev.target.elements.check.checked;

    console.log(username, password, check);
  };

  render() {
    return (
      <form onSubmit={this.formSubimitHandler}>
        <button type="reset">Reset</button>
        <label>Username:</label>
        <input name="username" type={"text"} />
        <label>Password:</label>
        <input name="password" type={"password"} />
        <label>Accept:</label>
        <input name="check" type={"checkbox"} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default UncontrolledLogin;
