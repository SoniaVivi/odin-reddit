import React from "react";
import PropTypes from "prop-types";
import SubscribeButton from "./shared/SubscribeButton";

const OriginHeader = (props) => {
  return (
    <React.Fragment>
      <div className="col-lg-1"></div>
      <div className="origin-header-wrapper col-lg-8">
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
      <div className="col-lg-3"></div>
    </React.Fragment>
  );
};

export default OriginHeader;
