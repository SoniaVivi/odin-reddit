import React, { useState } from "react";
import PropTypes from "prop-types";
import CommunityTypeButton from "./originsNew/CommunityTypeButton";
import sendAjaxRequest from "./shared/sendAjaxRequest";

const OriginNew = (props) => {
  const [selectedType, setSelectedType] = useState("Public");
  const [isNSFW, setIsNSFW] = useState(false);
  const [communityData, setCommunityData] = useState({
    title: "",
    description: "",
  });

  const submitData = (event) => {
    if (communityData.title.length < 3 || communityData.title.length > 32) {
      event.target.classList.add("invalid");
      return;
    }

    event.target.classList.remove("invalid");
    sendAjaxRequest("POST", "/origins/create", {
      title: communityData.title,
      description: communityData.description,
      nsfw: isNSFW,
      community_type: selectedType,
    }).then((response) => {
      console.log(response);
      if ("success" in response && !response.success) {
        return;
      }
      window.location.href = response.origin;
    });
  };

  return (
    <React.Fragment>
      <h1>Create a Community</h1>
      <div className="community-container">
        <strong>Name</strong>
        <p className="subtitle">
          Community names including capitalization cannot be changed.
        </p>
        <textarea
          id="community-name"
          onChange={(event) =>
            setCommunityData((prevData) => ({
              ...prevData,
              title: event.target.value,
            }))
          }
        ></textarea>
      </div>
      <div className="community-container">
        <strong>Topics</strong>
        <p className="subtitle">Lorem ipsum dolor sit amet, ne me</p>
        <button id="community-topic">Add a Primary Topic</button>
      </div>
      <div className="community-container">
        <strong>Description</strong>
        <p className="subtitle">Lorem ipsum dolor sit amet, ne me</p>
        <textarea
          id="create-community-description"
          onChange={(event) =>
            setCommunityData((prevData) => ({
              ...prevData,
              description: event.target.value,
            }))
          }
        ></textarea>
      </div>
      <div className="community-container">
        <strong>Community type</strong>
        <CommunityTypeButton
          selected={selectedType}
          text="Public"
          onClick={(text) => setSelectedType(text)}
        />
        <CommunityTypeButton
          selected={selectedType}
          text="Restricted"
          onClick={(text) => setSelectedType(text)}
        />
        <CommunityTypeButton
          selected={selectedType}
          text="Private"
          onClick={(text) => setSelectedType(text)}
        />
      </div>
      <div className="community-container">
        <strong className="nsfw-heading">Adult Content</strong>
        <div
          className="nsfw-container"
          onClick={() => setIsNSFW((prevState) => !prevState)}
        >
          <div className={`nsfw-icon${isNSFW ? " selected" : ""}`}>X</div>
          <strong className="nsfw-label">18+ year old community</strong>
        </div>
      </div>
      <button id="create-community" onClick={(e) => submitData(e)}>
        Create Community
      </button>
    </React.Fragment>
  );
};

export default OriginNew;
