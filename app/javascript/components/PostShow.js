import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import CommentSection from "./postsShow/CommentSection";
import CommentEditor from "./postsShow/CommentEditor";

const PostShow = (props) => {
  return (
    <div className="post-content">
      <div className="post-container no-grey-side-area">
        <Post data={props.post} loggedIn={props.logged_in}></Post>
      </div>
      <div className="comment-section">
        <CommentEditor
          data={
            !props.logged_in
              ? null
              : { poster_id: props.current_user_id, post_id: props.post.id }
          }
          logged_in={props.logged_in ? true : false}
          top_level={true}
        ></CommentEditor>
        <CommentSection
          comments={props.comments}
          isTopLevel="true"
          logged_in={props.logged_in}
          current_user_id={!props.logged_in ? null : props.current_user_id}
          post_id={props.post.id}
        ></CommentSection>
      </div>
    </div>
  );
};

export default PostShow;
