import React from "react";
import PropTypes from "prop-types";

const ModalButtons = (props) => {
  return (
    <button onClick={props.clickFunc} className={props.classNames}>
      {props.text}
    </button>
  );
};

export default ModalButtons;
