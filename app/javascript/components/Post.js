import React from "react";
import PropTypes from "prop-types";
import PosterTime from "./PosterTime";

const Post = (props) => {
  return (
    <React.Fragment>
      <div className="vertical-score-post-container">
        <button className="arrow arrow-up"></button>
        <div className="postfeed-score">
          {(() =>
            props.data.score > 1000
              ? (props.data.score / 1000).toString().slice(0, 3) + "k"
              : props.data.score)()}
        </div>
        <button className="arrow arrow-down"></button>
      </div>
      <div className="post-wrapper">
        <div className="post-details-container">
          <div className="poster-time-container">
            <a href={`/f/${props.data.origin}`} className="post-origin">
              f/{props.data.origin}
            </a>
            <PosterTime
              poster={props.data.poster}
              time="props.data.created-at"
            ></PosterTime>
          </div>
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
        </div>
        <div className="post-image"></div>
        <div className="utility-buttons">
          <a href={`/f/${props.data.origin}/${props.data.id}`}>
            {props.data.comment_quantity} Comments
          </a>
          <button>Share</button>
          <button>Save</button>
          <button>...</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;
