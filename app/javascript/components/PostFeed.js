import React from "react";
import PropTypes from "prop-types";
const PostFeed = (props) => {
  return (
    <React.Fragment>
      {props.posts.map((post) => (
        <li class="postfeed-post-container">
          <div className="vertical-score-post-container">
            <button className="arrow arrow-up"></button>
            <div class="postfeed-score">
              {(() =>
                post.score > 1000
                  ? (post.score / 1000).toString().slice(0, 3) + "K"
                  : post.score)()}
            </div>
            <button className="arrow arrow-down"></button>
          </div>
          <div className="post-details-container">
            <div className="post-metadata"></div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
          <div className="post-image"></div>
        </li>
      ))}
    </React.Fragment>
  );
};

export default PostFeed;
