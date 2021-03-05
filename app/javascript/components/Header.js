import React from "react";
import PropTypes from "prop-types";
import UserAccountModal from "./header/UserAccountModal";

const Header = () => {
  const toParamString = (key, val) => `${key}=${val}`;
  const signup = () =>
    Rails.ajax({
      type: "POST",
      url: "/users",
      dataType: "json",
      data: (() => {
        // const request = `user=${JSON.stringify({
        //   name: "TesterUser",
        //   email: "test@test.com",
        //   password: "test123456",
        //   password_confirmation: "test123456",
        // })}`;
        // return request;
      })(),
      success: (data) => console.log(data),
    });
  return (
    <React.Fragment>
      <a className="logo-container" href="/">
        <div className="logo" src=""></div>
        <p className="logo-text">fakedit</p>
      </a>
      <input className="search header-search"></input>
      <div className="login-container ">
        <UserAccountModal type="login"></UserAccountModal>
        <UserAccountModal type="signup"></UserAccountModal>
      </div>
      <div className="user-container"></div>
    </React.Fragment>
  );
};

export default Header;
