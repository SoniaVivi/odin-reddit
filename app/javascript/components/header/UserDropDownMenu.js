import React, { useState } from "react";
import PropTypes from "prop-types";
import onOutsideClick from "../shared/onOutsideClick";
import MenuSection from "./MenuSection";

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
        <img src={require("../../../assets/images/test-user-icon.png")}></img>
        <div className="user-info-container">
          <p>{props.name}</p>
          <p>X karma</p>
        </div>
      </li>
      <MenuSection
        sectionName="My Stuff"
        buttons={[
          <button onClick={() => (window.location.href = "/user/me")}>
            Profile
          </button>,
        ]}
        visible={areVisible}
      />
      <MenuSection
        sectionName="More Stuff"
        buttons={[<button onClick={props.logoutFunc}>Log Out</button>]}
        visible={areVisible}
      />
    </ul>
  );
};

export default UserDropDownMenu;
