import React, { useState } from "react";
import PropTypes from "prop-types";
import sendAjaxRequest from "../shared/sendAjaxRequest";
import UserAccountModal from "../userAccountModal/UserAccountModal";

const CommentEditor = (props) => {
  const [commentText, setCommentText] = useState("");
  const submit = () => (props.updateEditor ? updateComment() : submitComment());

  const submitComment = () =>
    sendAjaxRequest("POST", "/comment", {
      post_id: props.data.post_id,
      parent_id: props.data.parent_id ? props.data.parent_id : "",
      body: commentText,
    });
  const updateComment = () =>
    sendAjaxRequest("PUT", "/comment", {
      comment_id: props.commentId,
      body: commentText,
    });

  const getSubmitText = () => {
    if (!props.updateEditor) {
      return props.top_level ? "Comment" : "Reply";
    }
    return "Save Edits";
  };

  if (props.logged_in) {
    return (
      <div
        className={`comment-editor ${props.updateEditor ? "editor" : "row"}`}
      >
        <textarea
          className="col-10 comment-editor"
          onChange={(e) => setCommentText(e.target.value)}
        >
          {props.content}
        </textarea>
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
                submit()
                  .then((response) => {
                    if ("success" in response && response.success) {
                      location.reload();
                    }
                  })
                  .catch((error) => console.log(error))
              }
            >
              {getSubmitText()}
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
