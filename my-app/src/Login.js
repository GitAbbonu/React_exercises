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
    const _name = ev.target.name;
    const _value = ev.target.value;
    const _cheched = ev.target.checked;

    if (_name === "accept") {
      this.setState((prevState) => {
        return { accept: _cheched };
      });
    } else {
      this.setState(() => {
        return { [_name]: _value };
      });
    }
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
