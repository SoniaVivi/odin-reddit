import React, { useState } from "react";
import PropTypes from "prop-types";
import sendAjaxRequest from "../shared/sendAjaxRequest";
import UserAccountModal from "../userAccountModal/UserAccountModal";
import MarkupButtons from "./MarkupButtons";
import onOutsideClick from "../shared/onOutsideClick";

const PostEditor = (props) => {
  const [postText, setPostText] = useState(props.content);
  const [showBorder, setShowBorder] = useState(false);
  const changeBorder = () => setShowBorder((prevState) => !prevState);
  const submit = () =>
    sendAjaxRequest("PUT", "/post", { id: props.id, body: postText });

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
    <React.Fragment>
      <div
        className={`post-editor-container${showBorder ? " border" : ""}`}
        onClick={(e) => onOutsideClick(e, changeBorder)}
      >
        <MarkupButtons
          buttons={
            <button className="markdown-mode post-editor">Markdown Mode</button>
          }
        />
        <textarea
          className="post-editor"
          onChange={(e) => setPostText(e.target.value)}
        >
          {props.content}
        </textarea>
      </div>
      <div className="post-editor submission-buttons">
        <button className="cancel post-editor" onClick={props.exit}>
          Cancel
        </button>
        <button
          className="submit post-editor"
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
          save
        </button>
      </div>
    </React.Fragment>
  );
};

export default PostEditor;
