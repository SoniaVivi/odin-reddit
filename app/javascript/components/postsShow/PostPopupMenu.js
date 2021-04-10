import React, { useState } from "react";
import PropTypes from "prop-types";
import toggleScroll from "../shared/toggleScroll";
import sendAjaxRequest from "../shared/sendAjaxRequest";

const PostPopupMenu = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const exitModal = () => props.modal(null);
  const deleteModal = (
    <div className="delete-modal-wrapper">
      <div className="delete-modal-container">
        <div className="delete-modal header">
          <h1>Delete post?</h1>
          <button onClick={exitModal}>X</button>
        </div>
        <div className="delete-modal body">
          Are you sure you want to delete your post? You can't undo this.
        </div>
        <div className="delete-modal footer">
          <button onClick={exitModal}>Cancel</button>
          <button
            onClick={() => {
              sendAjaxRequest("DELETE", "/post", {
                id: props.postId,
              }).then((response) => {
                if (response.success == true) {
                  window.location.href = `/f/${props.origin}`;
                }
              });
            }}
          >
            delete post
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="popup-container post">
      <button className="post-menu-button">Edit Post</button>
      <button className="post-menu-button">Save</button>
      <button className="post-menu-button">Hide</button>
      {props.isPoster || props.isModerator ? (
        <button
          className="post-menu-button"
          onClick={() => {
            props.modal(deleteModal);
            toggleScroll();
          }}
        >
          Delete
        </button>
      ) : (
        ""
      )}
      <button className="post-menu-button">Mark as spoiler</button>
      <button className="post-menu-button">Mark as NSFW</button>
      <button className="post-menu-button">Send me reply notifications</button>
    </div>
  );
};

export default PostPopupMenu;
