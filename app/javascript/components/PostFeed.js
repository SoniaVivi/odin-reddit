import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const PostFeed = (props) => {
  return (
    <React.Fragment>
      {props.posts.map((post) => (
        <li
          className="post-container"
          onClick={(e) => {
            const blacklistedTags = ["BUTTON", "A"];
            if (
              e.target.dataset.redirect !== "false" &&
              !blacklistedTags.includes(e.target.nodeName)
            ) {
              window.location.href = `/f/${post.origin}/${post.id}`;
            }
          }}
        >
          <Post data={post}></Post>
        </li>
      ))}
    </React.Fragment>
  );
};

export default PostFeed;
