import React from "react";
import PropTypes from "prop-types";
const Header = () => {
  return (
    <React.Fragment>
      <a className="logo-container" href="">
        <div className="logo" src=""></div>
        <p className="logo-text">fakedit</p>
      </a>
      <input className="search header-search"></input>
      <div className="login-container ">
        <a>Log In</a>
        <a>Sign Up</a>
      </div>
      <div className="user-container"></div>
    </React.Fragment>
  );
};

export default Header;
