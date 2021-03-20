import React from "react";
import PropTypes from "prop-types";

const ModalWrapper = (props) => {
  return (
    <div className={`user-account-modal-wrapper ${props.classNames}`}>
      <div className={`user-account-modal parent ${props.classNames}`}>
        <p className="user-account-modal exit-button" onClick={props.exitFunc}>
          X
        </p>
        {props.data()}
      </div>
    </div>
  );
};

export default ModalWrapper;
