import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import SignUpFirstPage from "./SignUpFirstPage";
import SignUpSecondPage from "./SignUpSecondPage";
import LoginPage from "./LoginPage";
import sendAjaxRequest from "../shared/sendAjaxRequest";
import toggleScroll from "../shared/toggleScroll";
import ModalWrapper from "./ModalWrapper";
import ModalButton from "./ModalButton";

const UserAccountModal = (props) => {
  const [isButtonMode, setIsButtonMode] = useState(true);
  const [isFirstPage, setIsFirstpage] = useState(true);
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");

  const generateText = () => (props.type == "login" ? "Log In" : "Sign Up");
  const generateClassNames = () =>
    `${props.type} ${isFirstPage ? "first-page" : "second-page"}`;

  const checkIfUserNameExists = (name) =>
    sendAjaxRequest("POST", "/users/check_username", `username=${name}`);
  const exitModal = () => {
    setIsButtonMode(true);
    setIsFirstpage(true);
    toggleScroll();
  };
  const modalButton = (
    <ModalButton
      clickFunc={() => setIsButtonMode((prevState) => !prevState)}
      classNames={props.type + "-button"}
      text={generateText()}
    ></ModalButton>
  );

  const userSignup = () => {
    return sendAjaxRequest(
      "POST",
      "/users",
      `user=${JSON.stringify({
        name: username.current,
        email: email.current,
        password: password.current,
        password_confirmation: password.current,
      })}`,
      {
        toButtonMode: exitModal,
      }
    );
  };

  if (isButtonMode) {
    return modalButton;
  }

  toggleScroll();
  if (props.type == "signup") {
    return (
      <React.Fragment>
        {modalButton}
        <ModalWrapper
          classNames={generateClassNames()}
          exitFunc={exitModal}
          data={() => {
            if (isFirstPage) {
              return (
                <React.Fragment>
                  <img
                    src=""
                    width="10"
                    height="100"
                    className="user-account-modal"
                  ></img>
                  <SignUpFirstPage
                    secondPage={() => setIsFirstpage((prevState) => !prevState)}
                    classNames={generateClassNames()}
                    emailFunc={(emailInput) => (email.current = emailInput)}
                  ></SignUpFirstPage>
                </React.Fragment>
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
                  submit={userSignup}
                ></SignUpSecondPage>
              );
            }
          }}
        ></ModalWrapper>
      </React.Fragment>
    );
  } else if (props.type == "login") {
    return (
      <React.Fragment>
        {modalButton}
        <ModalWrapper
          classNames={generateClassNames()}
          exitFunc={exitModal}
          data={() => {
            return (
              <React.Fragment>
                <img
                  src=""
                  width="10"
                  height="100"
                  className="user-account-modal"
                ></img>
                <LoginPage></LoginPage>
              </React.Fragment>
            );
          }}
        ></ModalWrapper>
      </React.Fragment>
    );
  }
};

export default UserAccountModal;
