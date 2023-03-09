// Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.
import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    accept: false,
  };

  submitHandler = (ev) => {
    ev.preventDefault();
    console.log(this.state);
  };

  inputChangeHandler = (ev) => {
    const { name, type, value, checked } = ev.target;

    const v = type === "checkbox" ? checked : value;

    this.setState(() => {
      return { [name]: v };
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Username:</label>
        <input
          name={"username"}
          value={this.state.username}
          onChange={this.inputChangeHandler}
          type={"text"}
        />
        <label>Password:</label>
        <input
          name={"password"}
          value={this.state.password}
          onChange={this.inputChangeHandler}
          type={"password"}
        />
        <label>Accept:</label>
        <input
          name={"accept"}
          checked={this.state.accept}
          onChange={this.inputChangeHandler}
          type={"checkbox"}
        />
        <button type="submit">Add Client</button>
      </form>
    );
  }
}

export default Login;
