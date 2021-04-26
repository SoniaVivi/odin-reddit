import React from "react";
import PropTypes from "prop-types";

const SortPostButton = (props) => {
  return (
    <button
      className="sort-post-button white-button"
      onClick={() => (window.location.href = `${props.url}?sort=${props.text}`)}
    >
      {props.text}
    </button>
  );
};

export default SortPostButton;
