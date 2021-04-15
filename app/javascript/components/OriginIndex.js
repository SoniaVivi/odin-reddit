import React from "react";
import PropTypes from "prop-types";
import Categories from "./originsIndex/Categories";
import RankingsContainer from "./originsIndex/RankingsContainer";

const OriginIndex = (props) => {
  return (
    <React.Fragment>
      <div className="origin-index-header">
        <h1>Today's Top Growing Communities</h1>
        <p>Lorem ipsum dolor sit amet, id eirmod ornatus volutpat cum</p>
      </div>
      <Categories />
      <RankingsContainer rankings={props.rankings} />
      <div className="col-3" id="origin-sidebar"></div>
    </React.Fragment>
  );
};

export default OriginIndex;
