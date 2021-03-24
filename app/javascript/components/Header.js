import React from "react";
import PropTypes from "prop-types";
import UserAccountModal from "./userAccountModal/UserAccountModal";
import sendAjaxRequest from "./shared/sendAjaxRequest";
import UserDropDownMenu from "./UserDropDownMenu";

const Header = (props) => {
  const logout = () => {
    if (props.session_id !== "") {
      sendAjaxRequest("DELETE", "/users/sign_out", "")
        .then(() => location.reload())
        .catch((error) => console.log(error));
    }
  };

  return (
    <React.Fragment>
      <a className="logo-container" href="/">
        <div className="logo" src=""></div>
        <p className="logo-text">fakedit</p>
      </a>
      <input className="search header-search"></input>
      <div className="login-container ">
        {props.logged_in
          ? ""
          : [
              <UserAccountModal type="login"></UserAccountModal>,
              <UserAccountModal type="signup"></UserAccountModal>,
            ]}
      </div>
      {props.logged_in ? (
        <UserDropDownMenu
          name={props.username}
          logoutFunc={logout}
        ></UserDropDownMenu>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Header;
