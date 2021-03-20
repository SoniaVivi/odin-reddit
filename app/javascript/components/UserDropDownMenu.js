import React, { useState } from "react";
import PropTypes from "prop-types";

const UserDropDownMenu = (props) => {
  const [areVisible, setAreVisible] = useState(false);

  return (
    <ul
      className={`user-menu-container ${areVisible ? "border" : ""}`}
      onClick={(e) => {
        setAreVisible((prevState) => !prevState);
        const container = e.target;
        const closeMenu = (mouseUpEvent) => {
          let clickedElement = mouseUpEvent.target;

          if (!container.contains(clickedElement)) {
            setAreVisible((prevState) => !prevState);
            document.removeEventListener("mouseup", closeMenu);
          }
        };
        document.addEventListener("mouseup", closeMenu);
      }}
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
