import React, { useState } from "react";
import PropTypes from "prop-types";

const SubscriptionButton = (props) => {
  const getClassNames = (isWrapper = false) => {
    const classNames = {
      user: "users",
      subscription: "subscribed-origin",
    };
    return `subscription-button${isWrapper ? "-wrapper" : ""} ${
      classNames[props.type]
    }-button`;
  };

  return (
    <div
      className={`${getClassNames(true)}${props.hidden ? " hidden" : ""}`}
      onClick={() => {
        props.onClick ? props.onClick() : "";
      }}
    >
      <div
        className={`subscription-icon${
          props.type == "user" ? " user-button" : ""
        }`}
      ></div>
      <button className={getClassNames()}>{props.text}</button>
    </div>
  );
};

export default SubscriptionButton;
