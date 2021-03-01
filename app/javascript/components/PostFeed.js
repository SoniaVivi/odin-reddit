import React from "react";
import PropTypes from "prop-types";
const PostFeed = (props) => {
  const getMillisecondsPast = (timePosted) =>
    new Date(new Date() - new Date(timePosted));

  const getTimePosted = (timePosted) => {
    let millisecondsPast = getMillisecondsPast(timePosted);
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
        return `${timePast} ${units}`;
      }
    }
  };
  return (
    <React.Fragment>
      {props.posts.map((post) => (
        <li className="postfeed-post-container">
          <div className="vertical-score-post-container">
            <button className="arrow arrow-up"></button>
            <div className="postfeed-score">
              {(() =>
                post.score > 1000
                  ? (post.score / 1000).toString().slice(0, 3) + "k"
                  : post.score)()}
            </div>
            <button className="arrow arrow-down"></button>
          </div>
          <div className="post-details-container">
            <div className="post-metadata">
              <a href={`/f/${post.origin}`} className="post-origin">
                f/{post.origin}
              </a>
              <p> Posted by </p>
              <a href={`/user/${post.poster}/overview`} className="poster">
                {post.poster}
              </a>
              <pre className="time">
                {" "}
                {(() => getTimePosted(post.created_at))()}
              </pre>
            </div>
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
