import React from "react";
import PropTypes from "prop-types";
import UserAccountModal from "./header/UserAccountModal";
import sendAjaxRequest from "./shared/sendAjaxRequest";

const Header = (props) => {
  return (
    <React.Fragment>
      <a className="logo-container" href="/">
        <div className="logo" src=""></div>
        <p className="logo-text">fakedit</p>
      </a>
      <input className="search header-search"></input>
      <div className="login-container ">
        {props.session_id !== ""
          ? ""
          : [
              <UserAccountModal type="login"></UserAccountModal>,
              <UserAccountModal type="signup"></UserAccountModal>,
            ]}
      </div>
      <div
        className="user-container"
        onClick={() => {
          if (props.session_id !== "") {
            sendAjaxRequest(
              "DELETE",
              "/users/sign_out",
              `id=${props.session_id}`
            )
              .then((response) => location.reload())
              .catch((error) => console.log(error));
          }
        }}
      >
        Logged in as {props.username}
      </div>
    </React.Fragment>
  );
};

export default Header;
