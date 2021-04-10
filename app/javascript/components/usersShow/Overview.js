import React, { useState } from "react";
import PropTypes from "prop-types";
import generatePreviews from "./generatePreviews";

const Overview = (props) => {
  return (
    <React.Fragment>
      <div className="col-1"></div>
      <div className="col-8">
        <div></div>
        <div></div>
        {generatePreviews({ ...props })}
      </div>
    </React.Fragment>
  );
};

export default Overview;
