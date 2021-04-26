import React, { useState } from "react";
import PropTypes from "prop-types";
import Overview from "./usersShow/Overview";
import UserSidebar from "./usersShow/UserSidebar";
import CommentsPage from "./usersShow/CommentsPage";
import PostsPage from "./usersShow/PostsPage";

const UserShow = (props) => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabPages = {
    overview: <Overview data={props.overview} loggedIn={props.loggedIn} />,
    posts: <PostsPage data={props.posts} loggedIn={props.loggedIn} />,
    comments: <CommentsPage data={props.comments} loggedIn={props.loggedIn} />,
    ...(props.sameUser && {
      saved: <div></div>,
      hidden: <div></div>,
      upvoted: <div></div>,
      downvoted: <div></div>,
    }),
    "Awards Received": <div></div>,
    ...(props.sameUser && {
      "Awards Given": <div></div>,
    }),
  };
  const generateTabButtons = () => {
    const tabs = [];
    let i = 0;
    for (const tabName in tabPages) {
      tabs.push(
        <button
          className={`header-tab${
            tabName.toLowerCase() == activeTab ? " active" : ""
          }${i > 3 ? " collapse-tab" : ""}`}
        >
          {tabName}
        </button>
      );
      i += 1;
    }
    return tabs;
  };

  return (
    <React.Fragment>
      <div
        className="secondary-header"
        onClick={(e) =>
          !e.target.classList.contains("secondary-header") &&
          e.target.textContent != "..." &&
          setActiveTab(e.target.textContent.toLowerCase())
        }
      >
        {generateTabButtons()}
        <div className="collapsed-menu">
          <button>...</button>
        </div>
      </div>
      {tabPages[activeTab]}
      <UserSidebar data={props.sidebar} />
    </React.Fragment>
  );
};

export default UserShow;
