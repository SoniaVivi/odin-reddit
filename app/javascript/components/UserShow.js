import React, { useState } from "react";
import PropTypes from "prop-types";
import Overview from "./usersShow/Overview";
import UserSidebar from "./usersShow/UserSidebar";
import CommentsPage from "./usersShow/CommentsPage";
import PostsPage from "./usersShow/PostsPage";

const UserShow = (props) => {
  const placeholder = <div class="col-12 col-lg-9"></div>
  const [activeTab, setActiveTab] = useState("overview");
  const tabPages = {
    overview: <Overview data={props.overview} loggedIn={props.loggedIn} />,
    posts: <PostsPage data={props.posts} loggedIn={props.loggedIn} />,
    comments: <CommentsPage data={props.comments} loggedIn={props.loggedIn} />,
    ...(props.sameUser && {
      saved: placeholder,
      hidden: placeholder,
      upvoted: placeholder,
      downvoted: placeholder,
    }),
    "awards received": placeholder,
    ...(props.sameUser && {
      "awards given": placeholder,
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
      <UserSidebar data={{ ...props.sidebar, karma: props.karma }} />
    </React.Fragment>
  );
};

export default UserShow;
