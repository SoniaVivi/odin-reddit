import React from "react";
import PropTypes from "prop-types";
const PostFeed = (props) => {
  return (
    <React.Fragment>
      {props.posts.map((post) => (
        <li>
          <h1>{post.title}</h1>
          <div>{post.score}</div>
          <p>{post.description}</p>
        </li>
      ))}
    </React.Fragment>
  );
};

export default PostFeed;
