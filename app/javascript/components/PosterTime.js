import React from "react";
import PropTypes from "prop-types";
import relativeTime from "../packs/relativeTime";

const PosterTime = (props) => {
  return (
    <React.Fragment>
      <p className="poster-time"> Posted by </p>
      <a href={`/user/${props.poster}/overview`} className="poster-time">
        {props.poster}
      </a>
      <pre className="poster-time"> {(() => relativeTime(props.time))()}</pre>
    </React.Fragment>
  );
};

export default PosterTime;
