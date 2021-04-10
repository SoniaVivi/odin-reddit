import React, { useState } from "react";
import PropTypes from "prop-types";

const MenuSection = (props) => {
  return (
    <li
      className={`user-menu-section ${
        props.visible ? "visible" : "not-visible"
      }`}
    >
      <strong>{props.sectionName}</strong>
      {props.buttons.map((button) => (
        <div className="menu-option">{button}</div>
      ))}
    </li>
  );
};

export default MenuSection;
