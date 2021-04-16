import React from "react";
import PropTypes from "prop-types";

const CreatePostLink = (props) => {
  const goToSubmit = () =>
    (window.location.href = `/f/${props.originTitle}/submit`);

  return (
    <React.Fragment>
      <img
        className="user-icon"
        onClick={() => (window.location.href = "/user/me")}
      ></img>
      <input placeholder="Create Post" onClick={goToSubmit}></input>
      <button className="create-post-link-button" onClick={goToSubmit}></button>
      <button className="create-post-link-button" onClick={goToSubmit}></button>
    </React.Fragment>
  );
};

export default CreatePostLink;
