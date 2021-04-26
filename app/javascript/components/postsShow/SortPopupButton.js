import React, { useState } from "react";
import PropTypes from "prop-types";

const SortPopupButton = (props) => {
  const active = props.current.toLowerCase() == props.text.toLowerCase();

  return (
    <button
      className={`subtitle${active ? " active" : ""}`}
      onClick={(e) => props.onClick(e)}
    >
      {props.text}
    </button>
  );
};

export default SortPopupButton;
