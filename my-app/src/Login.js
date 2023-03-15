// Rewrite the Login component from Forms 03 as a function component, and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    accept: false,
  });

  const onLogin = (ev) => {
    ev.preventDefault();

    this.props.onLogin(data);
  };

  const inputChangeHandler = (ev) => {
    const { name, type, value, checked } = ev.target;
    const v = type === "checkbox" ? checked : value;

    setData((prevData) => {
      return { ...prevData, [name]: v };
    });
  };

  return (
    <form onSubmit={onLogin}>
      <label>Username:</label>
      <input
        name={"username"}
        value={data.username}
        onChange={inputChangeHandler}
        type={"text"}
      />
      <label>Password:</label>
      <input
        name={"password"}
        value={data.password}
        onChange={inputChangeHandler}
        type={"password"}
      />
      <label>Accept:</label>
      <input
        name={"accept"}
        checked={data.accept}
        onChange={inputChangeHandler}
        type={"checkbox"}
      />
      <button
        type="submit"
        disabled={data.username === "" || data.password === "" ? true : false}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
