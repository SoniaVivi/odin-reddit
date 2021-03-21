import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import createClassNamesFunction from "../shared/createClassNamesFunction";

const LoginPage = (props) => {
  const generateClassNames = createClassNamesFunction(props.classNames);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isValidUsername = useRef(false);
  const isValidPassword = useRef(false);

  return (
    <React.Fragment>
      <div className="account-forms-container user-account-modal">
        <p className="heading user-account-modal">Login</p>
        <p className="agreement-text user-account-modal">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </p>
        <button className="user-account-modal top login">
          Continue with Google
        </button>
        <button className="user-account-modal">Continue with Apple</button>
        <button className="user-account-modal bottom">
          Continue with Email
        </button>
        <div className="user-account-modal divider login">
          <p>OR</p>
        </div>
        <input
          placeholder="USERNAME"
          className="user-account-modal first-page"
          required
        ></input>
        <input
          placeholder="PASSWORD"
          className="user-account-modal first-page"
          type="password"
          required
        ></input>
        <button className="user-account-modal first-page submit login">
          Log in
        </button>
        <p className="user-account-modal link-text">
          Forgot your <a>username</a> or <a>password</a>?
        </p>
        <p className="user-account-modal link-text login">
          New to Reddit?{" "}
          <strong>
            <a>Sign up</a>
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
