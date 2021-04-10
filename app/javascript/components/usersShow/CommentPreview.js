import React, { useState } from "react";
import PropTypes from "prop-types";
import linkTo from "../shared/linkTo";
import formatScore from "../shared/formatScore";
import PosterTime from "../shared/PosterTime";

const CommentPreview = (props) => {
  const data = { ...props.data };
  return (
    <div
      className={`comment-preview-body hover-outline${
        !props.isChild ? " top-divider" : ""
      }`}
    >
      <div
        className={`dotted-divider-wrapper${props.isChild ? " nested" : ""}`}
      >
        <div className="dotted-divider"></div>
      </div>
      <div className="comment-preview">
        <div className="comment-metadata subtitle">
          <a
            href={linkTo("user", data.poster)}
            className={`comment-metadata user-link${
              props.isChild ? " nested" : ""
            }`}
          >
            {data.poster}
          </a>
          <span className="score">{` ${formatScore(data.score)} points `}</span>
          <PosterTime poster={data.poster} time={data.postedAt} />
        </div>
        <p className="comment-body">{data.body}</p>
        <div className="utility-buttons-container">
          <button>Reply</button>
          <button>Give Award</button>
          <button>Share</button>
          <button>...</button>
        </div>
        {props.nested ? props.nested : ""}
      </div>
    </div>
  );
};

export default CommentPreview;
