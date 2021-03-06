import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const PostFeed = (props) => {
  return (
    <React.Fragment>
      {props.posts.map((post) => (
        <li
          className="postfeed-post-container"
          onClick={() =>
            (window.location.href = `/f/${post.origin}/${post.id}`)
          }
        >
          <Post data={post}></Post>
        </li>
      ))}
    </React.Fragment>
  );
};

export default PostFeed;
