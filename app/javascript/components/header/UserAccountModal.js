import React, { useState } from "react";
import PropTypes from "prop-types";
import SignUpFirstPage from "./SignUpFirstPage";
import SignUpSecondPage from "./SignUpSecondPage";

const UserAccountModal = (props) => {
  const [isButtonMode, setIsButtonMode] = useState(false);
  const [isFirstPage, setIsFirstpage] = useState(true);
  const generateText = () => (props.type == "login" ? "Log In" : "Sign Up");
  const generateClassNames = () =>
    `${props.type} ${isFirstPage ? "first-page" : "second-page"}`;

  if (isButtonMode) {
    return (
      <button
        onClick={() => setIsButtonMode((prevState) => !prevState)}
        className={props.type + "-button"}
      >
        {generateText()}
      </button>
    );
  }

  if (props.type == "signup") {
    document.querySelector("body").classList.add("disable-scroll");

    return (
      <div className={`user-account-modal-wrapper ${generateClassNames()}`}>
        <div className="user-account-modal">
          {(() => {
            if (isFirstPage) {
              return (
                <SignUpFirstPage
                  secondPage={() => setIsFirstpage((prevState) => !prevState)}
                  classNames={generateClassNames()}
                ></SignUpFirstPage>
              );
            } else {
              return <SignUpSecondPage></SignUpSecondPage>;
            }
          })()}
        </div>
      </div>
    );
  } else if (props.type == "login") {
    return null;
  }
};

export default UserAccountModal;
