import React from "react";
import PropTypes from "prop-types";
import PosterTime from "./shared/PosterTime";
import ScoreDisplay from "./shared/ScoreDisplay";

const Post = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <ScoreDisplay
        score={props.data.score}
        type="Post"
        id={props.data.id}
        voteType={props.data.vote_type}
        loggedIn={props.loggedIn}
      ></ScoreDisplay>
      <div className="post-wrapper">
        <div className="post-details-container">
          <div className="poster-time-container">
            <a href={`/f/${props.data.origin}`} className="post-origin">
              f/{props.data.origin}
            </a>
            <PosterTime
              poster={props.data.poster}
              time={props.data.created_at}
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
