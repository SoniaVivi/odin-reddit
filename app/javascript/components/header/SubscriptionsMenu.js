import React, { useState } from "react";
import PropTypes from "prop-types";
import onOutsideClick from "../shared/onOutsideClick";
import SubscriptionButton from "./SubscriptionButton";
import { doIf } from "../shared/helpers";

const SubscriptionsMenu = (props) => {
  const [areVisible, setAreVisible] = useState(false);
  const getClasses = (defaultClass) =>
    areVisible ? defaultClass : `hidden ${defaultClass}`;

  return (
    <div
      className={`subscriptions-menu${doIf(areVisible, " border")}`}
      onClick={(e) => {
        onOutsideClick(e, () => setAreVisible((prevState) => !prevState));
      }}
    >
      <SubscriptionButton
        text={doIf(props.currentOrigin, props.currentOrigin, "Home")}
        type="subscription"
        hidden={!true}
      />
      <strong className={getClasses("subscription-divider")}>Other</strong>
      <SubscriptionButton
        text="Create Community"
        type="user"
        hidden={!areVisible}
        onClick={() => {
          window.open("/origins/create");
          setAreVisible((prevState) => !prevState);
        }}
      />
    </div>
  );
};

export default SubscriptionsMenu;
