// Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.

import React, { createRef } from "react";

class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  formSubimitHandler = (ev) => {
    ev.preventDefault();

    const { username, password, check } = this._formRef.current.elements;

    if (username.value === "" || password.value === "") {
      return false;
    }

    const data = {
      username: username.value,
      password: password.value,
      check: check.checked,
    };

    this.props.onLogin(data);
  };

  checkButtonDisabled = () => {
    const { username, password, submit } = this._formRef.current.elements;

    if (username.value !== "" && password.value !== "") {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  };
  componentDidMount() {
    this._formRef.current.elements.username.focus();
  }

  render() {
    return (
      <form ref={this._formRef} onSubmit={this.formSubimitHandler}>
        <button type="reset">Reset</button>
        <label>Username:</label>
        <input
          name="username"
          type={"text"}
          onChange={this.checkButtonDisabled}
        />
        <label>Password:</label>
        <input
          name="password"
          type={"password"}
          onChange={this.checkButtonDisabled}
        />
        <label>Accept:</label>
        <input name="check" type={"checkbox"} />
        <button type="submit" name="submit" disabled={true}>
          Login
        </button>
      </form>
    );
  }
}

export default UncontrolledLogin;
