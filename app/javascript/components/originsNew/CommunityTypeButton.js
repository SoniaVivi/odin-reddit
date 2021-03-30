import React, { useState } from "react";
import PropTypes from "prop-types";

const CommunityTypeButton = (props) => {
  return (
    <div className="radio-container" onClick={() => props.onClick(props.text)}>
      <div
        className={`radio-icon${
          props.selected == props.text ? " selected" : ""
        }`}
      ></div>
      <p className="radio-label">{props.text}</p>
      <p className="subtitle radio">Lorem ipsum dolor sit amet, enim</p>
    </div>
  );
};

export default CommunityTypeButton;
