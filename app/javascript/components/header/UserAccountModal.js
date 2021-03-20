import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import SignUpFirstPage from "./SignUpFirstPage";
import SignUpSecondPage from "./SignUpSecondPage";

const UserAccountModal = (props) => {
  const [isButtonMode, setIsButtonMode] = useState(false);
  const [isFirstPage, setIsFirstpage] = useState(true);
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");
  const checkIfUserNameExists = (name) => {
    return new Promise((resolve, reject) => {
      Rails.ajax({
        type: "POST",
        url: "/users/check_username",
        dataType: "json",
        data: `username=${name}`,
        success: (data) => resolve(data),
        error: (e) => reject(e),
      });
    });
  };
  const submitFunc = () => {
    return new Promise((resolve, reject) => {
      Rails.ajax({
        type: "POST",
        url: "/users",
        dataType: "json",
        data: (() => {
          console.log(username.current, email.current, password.current);
          return `user=${JSON.stringify({
            name: username.current,
            email: email.current,
            password: password.current,
            password_confirmation: password.current,
          })}`;
        })(),
        success: (data) => {
          resolve({
            data,
            toButtonMode: () => {
              setIsButtonMode(true);
              setIsFirstpage(true);
            },
          });
        },
        error: (e) => reject(e),
      });
    });
  };

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
        <div className={`user-account-modal ${generateClassNames()}`}>
          {(() => {
            if (isFirstPage) {
              return (
                <SignUpFirstPage
                  secondPage={() => setIsFirstpage((prevState) => !prevState)}
                  classNames={generateClassNames()}
                  emailFunc={(emailInput) => (email.current = emailInput)}
                ></SignUpFirstPage>
              );
            } else {
              return (
                <SignUpSecondPage
                  classNames={generateClassNames()}
                  toPrevPageFunc={() =>
                    setIsFirstpage((prevState) => !prevState)
                  }
                  checkUsernameFunc={checkIfUserNameExists}
                  setPasswordFunc={(newPassword) =>
                    (password.current = newPassword)
                  }
                  setUsernameFunc={(newUsername) =>
                    (username.current = newUsername)
                  }
                  submit={submitFunc}
                ></SignUpSecondPage>
              );
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
