// Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.

import React, { createRef } from "react";

class UncontrolledLogin extends React.Component {
  _usernameRef = createRef();

  formSubimitHandler = (ev) => {
    ev.preventDefault();

    const username = ev.target.elements.username.value;
    const password = ev.target.elements.password.value;
    const check = ev.target.elements.check.checked;

    console.log(username, password, check);
  };

  componentDidMount() {
    this._usernameRef.current.focus();
  }

  render() {
    return (
      <form onSubmit={this.formSubimitHandler}>
        <button type="reset">Reset</button>
        <label>Username:</label>
        <input ref={this._usernameRef} name="username" type={"text"} />
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
