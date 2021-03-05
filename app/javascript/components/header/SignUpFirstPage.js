import React, { useState } from "react";
import PropTypes from "prop-types";

const SignUpFirstPage = (props) => {
  const generateClassNames = (classNames = "") =>
    `${classNames} ${props.classNames}`;

  return (
    <React.Fragment>
      <img src="" width="10" height="100" className={props.classNames}></img>
      <div className={generateClassNames("account-forms-container")}>
        <p className={generateClassNames("heading")}>Sign up</p>
        <p className={generateClassNames("agreement-text")}>
          By continuing, you agree to our User Agreement and Privacy Policy.
        </p>
        <button className={generateClassNames("top")}>
          Continue with Google
        </button>
        <button className={generateClassNames("bottom")}>
          Continue with Apple
        </button>
        <div className={generateClassNames("divider")}>
          <p>OR</p>
        </div>
        <input placeholder="EMAIL" className={generateClassNames()}></input>
        <button
          className={generateClassNames("continue")}
          onClick={props.secondPage}
        >
          Continue
        </button>
        <p className={generateClassNames()}>
          Already a user? <a>Log in</a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default SignUpFirstPage;
