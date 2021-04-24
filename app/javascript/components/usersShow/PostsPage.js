import React, { useState } from "react";
import PropTypes from "prop-types";
import generatePreviews from "./generatePreviews";

const PostsPage = (props) => {
  return (
    <React.Fragment>
      <div className="col-9">
        <div></div>
        <div></div>
        {generatePreviews({ ...props, omitComments: true })}
      </div>
    </React.Fragment>
  );
};

export default PostsPage;
