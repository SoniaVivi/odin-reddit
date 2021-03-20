import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import CommentSection from "./post_show/CommentSection";
import CommentEditor from "./post_show/CommentEditor";

const PostShow = (props) => {
  return (
    <div className="post-content">
      <div className="post-container no-grey-side-area">
        <Post data={props.post}></Post>
      </div>
      <div className="comment-section">
        <CommentEditor
          post={
            !props.logged_in
              ? null
              : { poster_id: props.current_user_id, post_id: props.post.id }
          }
        ></CommentEditor>
        <CommentSection
          comments={props.comments}
          isTopLevel="true"
          logged_in={props.logged_in}
        ></CommentSection>
      </div>
    </div>
  );
};

export default PostShow;
