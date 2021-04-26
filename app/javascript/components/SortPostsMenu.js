import React from "react";
import PropTypes from "prop-types";
import SortPostButton from "./originsShow/SortPostButton";

const SortPostsMenu = (props) => {
  return (
    <React.Fragment>
      <div>
        <SortPostButton text="hot" url={props.url} />
        <SortPostButton text="new" url={props.url} />
        <SortPostButton text="top" url={props.url} />
        <button>...</button>
      </div>
      <div className="sort-posts placeholder">
        <button></button>
      </div>
    </React.Fragment>
  );
};

export default SortPostsMenu;
