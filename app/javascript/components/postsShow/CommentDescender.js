import React from "react";
import PropTypes from "prop-types";

const CommentDescender = (props) => {
  return (
    <div className="user-icon-container">
      <img
        className={"user-icon" + props.className}
        src={require("../../../assets/images/test-user-icon.png")}
        width="24"
        height="24"
      ></img>
      <div className="comment-nesting-line"></div>
    </div>
  );
};

export default CommentDescender;
