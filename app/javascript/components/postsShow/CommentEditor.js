import React, { useState } from "react";
import PropTypes from "prop-types";
import sendAjaxRequest from "../shared/sendAjaxRequest";
import UserAccountModal from "../userAccountModal/UserAccountModal";
import MarkupButtons from "./MarkupButtons";

const CommentEditor = (props) => {
  const [commentText, setCommentText] = useState(
    props.content ? props.content : ""
  );
  const containerClasses = (() => {
    return `comment-editor ${"updateEditor" in props ? "editor" : "row"}`;
  })();
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

  if (props.logged_in == undefined || !props.logged_in) {
    <div className="logged-out-editor col-10">
      <p>Log in or sign up to leave a comment</p>
      <div className="logged-out-editor-account-buttons">
        <UserAccountModal type="login"></UserAccountModal>
        <UserAccountModal type="signup"></UserAccountModal>
      </div>
    </div>;
  }

  return (
    <div className={containerClasses}>
      <textarea
        className="col-10 comment-editor"
        onChange={(e) => setCommentText(e.target.value)}
      >
        {props.content}
      </textarea>
      <div className="col-10 markup-buttons">
        <MarkupButtons />
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
};

export default CommentEditor;
