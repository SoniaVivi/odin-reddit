import React from "react";
import PropTypes from "prop-types";
import SubscribeButton from "./originsShow/SubscribeButton";

const OriginHeader = (props) => {
  return (
    <React.Fragment>
      <div className="origin-header-wrapper">
        <div className="origin-header-icon"></div>
        <div>
          <h1>{props.originName}</h1>
          <div className="origin-header-url">/f/{props.originName}</div>
        </div>
        <SubscribeButton
          joined={props.joined}
          loggedIn={props.loggedIn}
          originName={props.originName}
        />
      </div>
    </React.Fragment>
  );
};

export default OriginHeader;
