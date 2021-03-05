import React, { useState } from "react";
import PropTypes from "prop-types";

const SignUpSecondPage = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Choose your username</h1>
        <p>
          Your username is how other community members will see you. This name
          will be used to credit you for things you share. What shall we call
          you?
        </p>
      </div>
      <div>
        <div>
          <input placeholder="USERNAME"></input>
          <input placeholder="PASSWORD"></input>
        </div>
        <div></div>
      </div>
      <div>
        <button>Back</button>
        <button className="signup-button">Sign up</button>
      </div>
    </React.Fragment>
  );
};

export default SignUpSecondPage;
