import React, { useState } from "react";
import PropTypes from "prop-types";
import onOutsideClick from "./shared/onOutsideClick";

const UserDropDownMenu = (props) => {
  const [areVisible, setAreVisible] = useState(false);

  return (
    <ul
      className={`user-menu-container popup-container ${
        areVisible ? "border" : ""
      }`}
      onClick={(e) =>
        onOutsideClick(e, () => setAreVisible((prevState) => !prevState))
      }
    >
      <li className="user-menu-section">
        <img src={require("../../assets/images/test-user-icon.png")}></img>
        <div className="user-info-container">
          <p>{props.name}</p>
          <p>X karma</p>
        </div>
      </li>
      <li
        className={`user-menu-section ${
          areVisible ? "visible" : "not-visible"
        }`}
      >
        <strong>More Stuff</strong>
        <div className="menu-option logout">
          {/* <img className="icon"></img> */}
          <button onClick={props.logoutFunc}>Log Out</button>
        </div>
      </li>
    </ul>
  );
};

export default UserDropDownMenu;
