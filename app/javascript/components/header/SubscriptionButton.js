import React, { useState } from "react";
import PropTypes from "prop-types";
import { doIf } from "../shared/helpers";

const SubscriptionButton = (props) => {
  const getClassNames = (isWrapper = false) => {
    const classNames = {
      user: "users",
      subscription: "subscribed-origin",
    };
    return `subscription-button${doIf(isWrapper, "-wrapper")} ${
      classNames[props.type]
    }-button`;
  };

  return (
    <div
      className={getClassNames(true) + doIf(props.hidden, " hidden")}
      onClick={() => {
        props.onClick ? props.onClick() : "";
      }}
    >
      <div
        className={`subscription-icon${doIf(
          props.type == "user",
          " user-button"
        )}`}
      ></div>
      <button className={getClassNames()}>{props.text}</button>
    </div>
  );
};

export default SubscriptionButton;
