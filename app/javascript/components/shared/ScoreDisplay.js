import React from "react";
import PropTypes from "prop-types";

const ScoreDisplay = (props) => {
  const calcClassName = () => {
    if (props.type === "post") {
      return "vertical-score-container";
    } else {
      return "horizontal-score-container";
    }
  };
  return (
    <div className={calcClassName()}>
      <button className="arrow arrow-up"></button>
      <div className="score">
        {(() =>
          props.score > 1000
            ? (props.score / 1000).toString().slice(0, 3) + "k"
            : props.score)()}
      </div>
      <button className="arrow arrow-down"></button>
    </div>
  );
};

export default ScoreDisplay;
