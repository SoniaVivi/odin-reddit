import React from "react";
import PropTypes from "prop-types";
import UserAccountModal from "./userAccountModal/UserAccountModal";
import sendAjaxRequest from "./shared/sendAjaxRequest";
import UserDropDownMenu from "./header/UserDropDownMenu";
import SubscriptionsMenu from "./header/SubscriptionsMenu";
import { doIf } from "./shared/helpers";

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
      {doIf(
        props.loggedIn,
        <SubscriptionsMenu
          currentOrigin={props.originName}
          subscriptions={props.subscriptions}
        />
      )}
      <input
        className={`search header-search ${doIf(props.loggedIn, "logged-in")}`}
      ></input>
      <div className="login-container ">
        {doIf(!props.loggedIn, [
          <UserAccountModal type="login"></UserAccountModal>,
          <UserAccountModal type="signup"></UserAccountModal>,
        ])}
      </div>
      {doIf(
        props.loggedIn,
        <UserDropDownMenu
          name={props.username}
          logoutFunc={logout}
          karma={props.karma}
        ></UserDropDownMenu>
      )}
    </React.Fragment>
  );
};

export default Header;
