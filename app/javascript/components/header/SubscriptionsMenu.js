import React, { useState } from "react";
import PropTypes from "prop-types";
import onOutsideClick from "../shared/onOutsideClick";
import SubscriptionButton from "./SubscriptionButton";

const SubscriptionsMenu = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const getClasses = (defaultClass) =>
    isHidden ? `hidden ${defaultClass}` : defaultClass;
  const displaySubscriptions = () => {
    let buttons = [];
    for (const [title, url] of Object.entries(props.subscriptions)) {
      buttons.push(
        <SubscriptionButton
          text={title}
          type="subscription"
          hidden={isHidden}
          onClick={() => (window.location.href = url)}
        />
      );
    }
    return buttons;
  };

  return (
    <div
      className={`subscriptions-menu${!isHidden ? " border" : ""}`}
      onClick={(e) => {
        onOutsideClick(e, () => setIsHidden((prevState) => !prevState));
      }}
    >
      <SubscriptionButton
        text={props.currentOrigin ? props.currentOrigin : "Home"}
        type="subscription"
        hidden={false}
      />
      <div class={`subscriptions-menu-wrapper${isHidden ? " hidden" : ""}`}>
        <strong className={getClasses("subscription-divider")}>
          Fakedit Feeds
        </strong>
        <SubscriptionButton
          text="Top Communities"
          type="subscription"
          hidden={isHidden}
          onClick={() => (window.location.href = "/origins/leaderboard")}
        />
        <strong className={getClasses("subscription-divider")}>
          My Communities
        </strong>
        {displaySubscriptions()}
        <strong className={getClasses("subscription-divider")}>Other</strong>
        <SubscriptionButton
          text="Create Community"
          type="user"
          hidden={isHidden}
          onClick={() => {
            window.open("/origins/create");
            setIsHidden((prevState) => !prevState);
          }}
        />
      </div>
    </div>
  );
};

export default SubscriptionsMenu;
