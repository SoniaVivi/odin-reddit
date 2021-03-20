import React from "react";
import PropTypes from "prop-types";

const ModalButton = (props) => {
  return (
    <button onClick={props.clickFunc} className={props.classNames}>
      {props.text}
    </button>
  );
};

export default ModalButton;
