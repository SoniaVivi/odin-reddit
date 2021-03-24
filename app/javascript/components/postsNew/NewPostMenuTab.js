import React from "react";
import PropTypes from "prop-types";

const NewPostMenuTab = (props) => {
  return (
    <button
      className={(() => props.classNames(props.displayText))()}
      onClick={() => props.onClick(props.displayText)}
    >
      {props.displayText}
    </button>
  );
};

export default NewPostMenuTab;
