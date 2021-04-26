import React, { useState } from "react";
import PropTypes from "prop-types";
import SortPopupButton from "./SortPopupButton";
import onOutsideClick from "../shared/onOutsideClick";

const SortCommentsMenu = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const switchPopupVisibility = () => setShowPopup((prevState) => !prevState);
  const changeSort = (e) =>
    (window.location.href = `${
      props.url
    }?sort=${e.target.textContent.toLowerCase()}`);

  return (
    <div className="sort-comments-container bottom-divider">
      <span className="sort-comments">Sort by</span>
      <div
        onClick={(e) => {
          onOutsideClick(e, switchPopupVisibility);
        }}
      >
        <span className="current-sort sort-comments">{props.currentSort}</span>
        <div
          className={`sort-comments-popup${
            showPopup ? " popup-container" : " hidden"
          }`}
        >
          <SortPopupButton
            text="top"
            onClick={changeSort}
            current={props.currentSort}
          />
          <SortPopupButton
            text="new"
            onClick={changeSort}
            current={props.currentSort}
          />
          <SortPopupButton
            text="old"
            onClick={changeSort}
            current={props.currentSort}
          />
        </div>
      </div>
    </div>
  );
};

export default SortCommentsMenu;
