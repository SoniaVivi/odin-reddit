import React from "react";
import PropTypes from "prop-types";

const Post = (props) => {
  const getTimePosted = (timePosted) => {
    let millisecondsPast = new Date(new Date() - new Date(timePosted));
    let getTime = {
      years: () => millisecondsPast.getUTCFullYear() - 1970,
      months: () => millisecondsPast.getMonth(),
      weeks: () => millisecondsPast / 604800000,
      days: () => millisecondsPast / 86400000,
      hours: () => millisecondsPast / 3600000,
      minutes: () => millisecondsPast / 60000,
      seconds: () => millisecondsPast / 1000,
      "just now": () => {},
    };
    for (const [units, func] of Object.entries(getTime)) {
      let timePast = Math.floor(func());
      if (timePast > 0) {
        return `${timePast} ${units}${units ? " ago" : ""}`;
      }
    }
  };

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
          <div className="post-metadata">
            <a href={`/f/${props.data.origin}`} className="post-origin">
              f/{props.data.origin}
            </a>
            <p> Posted by </p>
            <a href={`/user/${props.data.poster}/overview`} className="poster">
              {props.data.poster}
            </a>
            <pre className="time">
              {" "}
              {(() => getTimePosted(props.data.created_at))()}
            </pre>
          </div>
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
        </div>
        <div className="post-image"></div>
        <div className="post-buttons">
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
