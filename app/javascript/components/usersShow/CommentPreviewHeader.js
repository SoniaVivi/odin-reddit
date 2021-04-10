import React, { useState } from "react";
import PropTypes from "prop-types";
import linkTo from "../shared/linkTo";

const CommentPreviewHeader = (props) => {
  return (
    <div className="comment-preview-header hover-outline">
      <div className="comment-preview-tab">
        <img className="text-bubble" width="16" height="16"></img>
      </div>
      <div>
        <p className="subtitle">
          <a href={linkTo("user", props.user)} className="user-link">
            {props.user}
          </a>
          {" commentted on "}
          <span className="origin-title">{`${props.title} `}</span>
          <a
            className="origin-link dot-before"
            href={linkTo("origin", props.origin)}
          >
            f/{props.origin}
          </a>
          <span className="dot-before">
            Posted by <a className="poster-link">u/{props.poster}</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CommentPreviewHeader;
