import React from "react";
import PropTypes from "prop-types";

const Category = (props) => {
  return (
    <button className={`category${props.active ? " active" : ""}`}>
      {props.text}
    </button>
  );
};

export default Category;
