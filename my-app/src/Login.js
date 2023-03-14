import React from "react";
import Container from "./Container";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    accept: false,
  };

  onLogin = (ev) => {
    ev.preventDefault();
    this.props.onLogin(this.state);
    this.resetHandler(ev);
  };

  inputChangeHandler = (ev) => {
    const { value, name, checked, type } = ev.target;
    const v = type === "checkbox" ? checked : value;

    this.setState(() => {
      return { [name]: v };
    });
  };

  resetHandler = (ev) => {
    ev.preventDefault();

    this.setState({
      username: "",
      password: "",
      accept: false,
    });
  };

  render() {
    const styleButton = {
      backgroundColor: this.state.password.length > 8 ? "green" : "red",
      color: "white",
    };

    return (
      <Container>
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
            disabled={
              this.state.username === "" || this.state.password === ""
                ? true
                : false
            }
          >
            Login
          </button>
          <button onClick={this.resetHandler}>Reset</button>
        </form>
      </Container>
    );
  }
}

export default Login;
