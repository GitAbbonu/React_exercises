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
    const _name = ev.target.name;
    const _value = ev.target.value;
    const _cheched = ev.target.checked;

    this.checkInput();

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
  //Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.

  render() {
    const styleButton = {
      backgroundColor: this.state.password.length > 8 ? "green" : "red",
      color: "white",
    };

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
        <button
          style={styleButton}
          type="submit"
          disabled={this.state.disabled}
        >
          Login
        </button>
      </form>
    );
  }
}

export default Login;
