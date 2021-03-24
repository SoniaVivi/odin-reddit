import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import createClassNamesFunction from "../shared/createClassNamesFunction";

const SignUpSecondPage = (props) => {
  const generateClassNames = createClassNamesFunction(props.classNames);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isValidUsername = useRef(false);
  const isValidPassword = useRef(false);

  return (
    <React.Fragment>
      <div className={generateClassNames("header")}>
        <h1>Choose your username</h1>
        <p>
          Lorem ipsum dolor sit amet, per ullum mollis salutandi et. Pro natum
          audiam ne, has ut ess
        </p>
      </div>
      <div className={generateClassNames("forms")}>
        <div>
          <input
            placeholder="CHOOSE A USERNAME"
            minLength="3"
            maxLength="24"
            required
            onChange={async (e) => {
              if (e.target.validity.valid) {
                const response = await props.checkUsernameFunc(e.target.value);

                const exists = response.exists;
                if (!exists) {
                  setUsername(e.target.value);
                  isValidUsername.current = true;
                  return;
                }
                isValidUsername.current = false;
              }
            }}
          ></input>
          <input
            placeholder="PASSWORD"
            minLength="6"
            type="password"
            required
            onChange={(e) => {
              if (e.target.validity.valid) {
                setPassword(e.target.value);
                isValidPassword.current = true;
              } else {
                isValidPassword.current = false;
              }
            }}
          ></input>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, per ullum mollis salutandi et. Pro natum
            audiam ne, has ut ess
          </p>
        </div>
      </div>
      <div className={generateClassNames("footer")}>
        <button onClick={props.toPrevPageFunc}>Back</button>
        <button
          className={generateClassNames("signup-button")}
          onClick={() => {
            if (isValidUsername.current && isValidPassword.current) {
              props.setUsernameFunc(username);
              props.setPasswordFunc(password);
              props
                .submit()
                .then((response) => {
                  response.signin().then(() => location.reload());
                })
                .catch((e) => console.log(e));
            }
          }}
        >
          Sign up
        </button>
      </div>
    </React.Fragment>
  );
};

export default SignUpSecondPage;
