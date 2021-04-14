import React from "react";
import PropTypes from "prop-types";
import SubscribeButton from "./shared/SubscribeButton";

const SideBar = (props) => {
  const formatDate = (date) => {
    let dateArray = new Date(Date.parse(date))
      .toDateString()
      .split(" ")
      .slice(1);
    dateArray[1] += ",";
    return dateArray.join(" ");
  };
  const alternatingButton = () => {
    if (props.postPage) {
      return (
        <SubscribeButton
          onClick={() => {}}
          loggedIn={props.loggedIn}
          joined={props.joined}
          sidebar={true}
          originName={props.originTitle}
        ></SubscribeButton>
      );
    } else if (props.loggedIn) {
      return (
        <SidebarButton
          text="Create Post"
          onClick={() =>
            (window.location.href = `/f/${props.originTitle}/submit`)
          }
          loggedIn={props.loggedIn}
        ></SidebarButton>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="community-info">
        <div className="community-info-heading">
          <p>About Community</p>
          <button>...</button>
        </div>
        {/* <div>
          <img></img>
          <a>/f/{props.originTitle}</a>
        </div> */}
        <p className="community-description">
          Lorem ipsum dolor sit amet, vim ea dolores antiopam disputando
        </p>
        <div className="origin-statistics-container">
          <div className="statistic total-members">
            <strong>{props.subscribers}</strong>
            <p>Members</p>
          </div>
          <div className="statistic online-users">
            <strong>X</strong>
            <p>Online</p>
          </div>
        </div>
        <div className="community-miscellaneous">
          <p className="origin-creation-date">
            Created {formatDate(props.originCreationDate)}
          </p>
          {alternatingButton()}
        </div>
        {props.loggedIn ? (
          <div className="community-options-container">
            <button className="community-options">Community Options</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </React.Fragment>
  );
};

export default SideBar;
