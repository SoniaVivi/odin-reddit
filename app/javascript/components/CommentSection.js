import React from "react";
import PropTypes from "prop-types";
const CommentSection = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => {
        <div className="comment-container">
          <div className="user-icon-container"></div>
          <div className="comment-data-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>;
      })}
    </ul>
  );
};

export default CommentSection;
