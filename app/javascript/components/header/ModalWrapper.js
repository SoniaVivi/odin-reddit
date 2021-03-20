import React from "react";
import PropTypes from "prop-types";

const ModalWrapper = (props) => {
  return (
    <div className={`user-account-modal-wrapper ${props.classNames}`}>
      <div className={`user-account-modal ${props.classNames}`}>
        {props.data()}
      </div>
    </div>
  );
};

export default ModalWrapper;
