// Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.
import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    accept: false,
    disabled: true,
  };

  onLogin = (ev) => {
    ev.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
      accept: this.state.accept,
    };

    this.props.onLogin(data);
  };

  inputChangeHandler = (ev) => {
    const { name, type, value, checked } = ev.target;
    const v = type === "checkbox" ? checked : value;

    this.checkInput();

    this.setState(() => {
      return { [name]: v };
    });
  };

  checkInput = () => {
    if (this.state.username === "" || this.state.password === "") {
      this.setState(() => {
        return { disabled: true };
      });
    } else {
      this.setState(() => {
        return { disabled: false };
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onLogin}>
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
        <button type="submit" disabled={this.state.disabled}>
          Login
        </button>
      </form>
    );
  }
}

export default Login;
