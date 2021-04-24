import React, { useState } from "react";
import PropTypes from "prop-types";
import formatDate from "../shared/formatDate";

const UserSidebar = (props) => {
  const { name, created_at: joined } = props.data;
  return (
    <div className="col-3 user-sidebar">
      <div className="user-info">
        <img
          className="user-icon soft-border"
          src={require("../../../assets/images/test-user-icon.png")}
          width="100"
          height="100"
        ></img>
        <p className="user-name">f/{name}</p>
        <div className="user-metadata">
          <div>
            <strong>Karma</strong>
            <span>12,345</span>
          </div>
          <div>
            <strong>Cake day</strong>
            <span>{formatDate(joined)}</span>
          </div>
        </div>
        <div className="user-options">
          <button className="blue-button">Follow</button>
          <button className="blue-button">Chat</button>
        </div>
        <button className="user-more-options">More Options</button>
      </div>
    </div>
  );
};

export default UserSidebar;
