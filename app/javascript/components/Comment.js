import React from "react";
import PropTypes from "prop-types";
import PosterTime from "./shared/PosterTime";
import ScoreDisplay from "./shared/ScoreDisplay";

const Comment = (props) => {
  return (
    <div className={"comment-container" + props.className}>
      <div className="user-icon-container">
        <img
          className={"user-icon" + props.className}
          src={require("../../assets/images/test-user-icon.png")}
          width="24"
          height="24"
        ></img>
        <div className="comment-nesting-line"></div>
      </div>
      <div className="comment-body-container row">
        <div className="poster-time-container">
          <PosterTime
            poster={props.data.poster}
            time={props.data.created_at}
          ></PosterTime>
        </div>
        <div>{props.data.body}</div>
        <div className="utility-buttons">
          <ScoreDisplay score={props.data.score} type="comment"></ScoreDisplay>
          <button>Reply</button>
          <button>Share</button>
          <button>Report</button>
          <button>Save</button>
        </div>
        {props.children ? props.children : ""}
      </div>
    </div>
  );
};

export default Comment;
