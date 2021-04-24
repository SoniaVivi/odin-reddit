import React, { useState } from "react";
import PropTypes from "prop-types";
import generatePreviews from "./generatePreviews";

const CommentsPage = (props) => {
  return (
    <React.Fragment>
      <div className="col-9">
        <div></div>
        <div></div>
        {generatePreviews({ ...props, omitPosts: true })}
      </div>
    </React.Fragment>
  );
};

export default CommentsPage;
