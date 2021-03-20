import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import createClassNamesFunction from "../shared/createClassNamesFunction";

const SignUpFirstPage = (props) => {
  const generateClassNames = createClassNamesFunction(props.classNames);
  const [emailText, setEmailText] = useState("");
  const isValidEmail = useRef(false);

  return (
    <React.Fragment>
      <div className="account-forms-container user-account-modal">
        <p className="heading user-account-modal">Sign up</p>
        <p className="agreement-text user-account-modal">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </p>
        <button className="user-account-modal top">Continue with Google</button>
        <button className="user-account-modal bottom">
          Continue with Apple
        </button>
        <div className="user-account-modal divider">
          <p>OR</p>
        </div>
        <input
          placeholder="EMAIL"
          className="user-account-modal first-page"
          type="email"
          required
          onChange={(e) => {
            if (e.target.validity.valid) {
              setEmailText(e.target.value);
              isValidEmail.current = true;
            } else {
              isValidEmail.current = false;
            }
          }}
        ></input>
        <button
          className="user-account-modal first-page submit"
          onClick={() => {
            if (isValidEmail.current == true) {
              props.emailFunc(emailText);
              props.secondPage();
            }
          }}
        >
          Continue
        </button>
        <p className="user-account-modal link-text">
          Already a user?{" "}
          <strong>
            <a>Log in</a>
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default SignUpFirstPage;
