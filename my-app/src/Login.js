// Add a "reset" button to the Login component that clears the content of all three inputs when clicked.
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

    if (this.state.username === "" || this.state.password === "") {
      return false;
    }

    const data = {
      username: this.state.username,
      password: this.state.password,
      accept: this.state.accept,
    };

    this.props.onLogin(data);
  };

  inputChangeHandler = (ev) => {
    const { name, type, value, checked } = ev.target;
    const val = type === "checkbox" ? checked : value;

    this.setState(() => {
      return { [name]: val };
    });

    this.checkInput();
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

  resetButtonHandler = (ev) => {
    ev.preventDefault();
    this.setState(() => {
      return {
        username: "",
        password: "",
        accept: false,
        disabled: true,
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.onLogin}>
        <button onClick={this.resetButtonHandler}>Reset</button>
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
