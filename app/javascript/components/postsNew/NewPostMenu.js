import React from "react";
import PropTypes from "prop-types";
import NewPostMenuTab from "./NewPostMenuTab";

const NewPostMenu = (props) => {
  return (
    <div className="new-post-type-menu">
      {props.tabsText.map((text) => (
        <NewPostMenuTab
          displayText={text}
          classNames={props.classFunc}
          onClick={props.clickFunc}
        ></NewPostMenuTab>
      ))}
    </div>
  );
};

export default NewPostMenu;
