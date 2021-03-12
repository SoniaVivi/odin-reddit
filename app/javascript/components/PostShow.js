import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import CommentSection from "./CommentSection";

const PostShow = (props) => {
  return (
    <div className="post-content">
      <div className="post-container no-grey-side-area">
        <Post data={props.post}></Post>
      </div>
      <div className="comment-section">
        <CommentSection
          comments={props.comments}
          isTopLevel="true"
        ></CommentSection>
      </div>
    </div>
  );
};

export default PostShow;
