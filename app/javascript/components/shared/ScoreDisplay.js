import React, { useState } from "react";
import PropTypes from "prop-types";
import sendAjaxRequest from "./sendAjaxRequest";

const ScoreDisplay = (props) => {
  const [voteType, setVoteType] = useState(props.voteType);
  const [score, setScore] = useState(props.score);

  const newVote = (type) =>
    sendAjaxRequest("POST", "/vote", {
      voteable_type: props.type,
      voteable_id: props.id,
      vote_type: type,
    });
  const deleteVote = () => {
    return sendAjaxRequest("DELETE", "/vote", {
      voteable_type: props.type,
      voteable_id: props.id,
      vote_type: voteType,
    });
  };
  const onVote = (type) => {
    const isType = type == voteType;
    deleteVote().finally(() => {
      if (type != voteType) {
        newVote(type);
        setVoteType(type);
        setScore(score + (type == "up" ? 1 : -1));
      }
    });
    if (isType) {
      setVoteType(null);
      setScore(props.score);
    }
  };
  const calcClassName = () => {
    if (props.type === "Post") {
      return "vertical-score-container";
    } else {
      return "horizontal-score-container";
    }
  };

  return (
    <div className={calcClassName()}>
      <button
        className={"arrow arrow-up" + (voteType == "up" ? " voted" : "")}
        onClick={() => onVote("up")}
      ></button>
      <div className="score">
        {(() =>
          score > 1000 ? (score / 1000).toString().slice(0, 3) + "k" : score)()}
      </div>
      <button
        className={"arrow arrow-down" + (voteType == "down" ? " voted" : "")}
        onClick={() => onVote("down")}
      ></button>
    </div>
  );
};

export default ScoreDisplay;
