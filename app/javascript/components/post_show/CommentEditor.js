import React, { useState } from "react";
import PropTypes from "prop-types";
import sendAjaxRequest from "../shared/sendAjaxRequest";
import UserAccountModal from "../userAccountModal/UserAccountModal";

const CommentEditor = (props) => {
  const [commentText, setCommentText] = useState("");
  const submitComment = () => {
    return sendAjaxRequest("POST", "/comment", {
      poster_id: props.data.poster_id,
      post_id: props.data.post_id,
      parent_id: props.data.parent_id ? props.data.parent_id : "",
      body: commentText,
    });
  };

  if (props.logged_in) {
    return (
      <div className="comment-editor row">
        <textarea
          className="col-10 comment-editor"
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
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
            <button className="new-comment-options">Markdown Mode</button>
            <button
              className="new-comment-options submit"
              onClick={() =>
                submitComment()
                  .then((response) => location.reload())
                  .catch((error) => console.log(error))
              }
            >
              {props.top_level ? "Comment" : "Reply"}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="logged-out-editor col-10">
        <p>Log in or sign up to leave a comment</p>
        <div className="logged-out-editor-account-buttons">
          <UserAccountModal type="login"></UserAccountModal>
          <UserAccountModal type="signup"></UserAccountModal>
        </div>
      </div>
    );
  }
};

export default CommentEditor;
