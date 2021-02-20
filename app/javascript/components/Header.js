import React from "react";
import PropTypes from "prop-types";
const Header = () => {
  return (
    <div className="header">
      <a className="logo-container" href="">
        <div className="logo" src=""></div>
        <p class="logo-text">fakedit</p>
      </a>
      <input className="search header-search"></input>
      <div className="login-container ">
        <a>Log In</a>
        <a>Sign Up</a>
      </div>
      <div className="user-container"></div>
    </div>
  );
};

export default Header;
