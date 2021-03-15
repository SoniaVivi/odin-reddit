import React from "react";
import PropTypes from "prop-types";

const CommentEditor = (props) => {
  return (
    <div className="comment-editor row">
      <textarea className="col-10 comment-editor"></textarea>
      <div className="col-10 markup-buttons">
        <div className="text-formatting-buttons formatting-container">
          <button>B</button>
          <button>I</button>
          <button>L</button>
          <button>ST</button>
          <button>{"</>"}</button>
          <button>A</button>
          <button>!</button>
        </div>
        <div className="structural-formatting-buttons formatting-container">
          <button>H</button>
          <button>...</button>
        </div>
        <div className="new-comment-options">
          <button class="new-comment-options">Markdown Mode</button>
          <button class="new-comment-options">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default CommentEditor;
