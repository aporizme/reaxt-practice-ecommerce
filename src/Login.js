import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://bizmagsb.com/wp-content/uploads/2020/09/Amazon_PNG6.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button>Sign In</button>
        </form>
        <p>
          Lorem ipsum Loremg elements must have an alt prop, either with
          meaningful text, or an empty string for decorative images mg elements
          must have an alt prop
        </p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
