import React from "react";
import PropTypes from "prop-types";
import formatScore from "../shared/formatScore";

const RankingsContainer = (props) => {
  const ranking = (title, subscriptions, rank) => {
    return (
      <div className="ranking-container">
        <div>
          <p className="rank">{rank}</p>
          <strong className="rank-origin-title">f/{title}</strong>
        </div>
        <strong className="rank-change">{formatScore(subscriptions)}</strong>
      </div>
    );
  };

  return (
    <div className="col-7" id="rankings">
      <div className="container-header">
        <h1>Today's Top Growing Communities</h1>
        <p>Rank Change</p>
      </div>
      {props.rankings.map((rankData, i) =>
        ranking(rankData.title, rankData.count, i + 1)
      )}
    </div>
  );
};

export default RankingsContainer;
