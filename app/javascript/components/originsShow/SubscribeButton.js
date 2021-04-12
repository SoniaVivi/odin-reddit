import React, { useState } from "react";
import PropTypes from "prop-types";
import UserAccountModal from "../userAccountModal/UserAccountModal";
import sendAjaxRequest from "../shared/sendAjaxRequest";

const SubscribeButton = (props) => {
  const [joined, setJoined] = useState(props.joined);
  const [buttonText, setButtonText] = useState(
    props.joined ? "Joined" : "Join"
  );

  const [showModal, setShowModal] = useState(false);
  const modifySubscription = () => {
    const type = !joined ? "POST" : "DELETE";
    sendAjaxRequest(type, "/subscription", {
      origin_title: props.originName,
    }).then((response) => {
      if ("success" in response && response.success) {
        setButtonText(joined ? "Join" : "Joined");
        setJoined((prevState) => (prevState == true ? false : true));
      }
    });
  };

  return (
    <React.Fragment>
      <button
        className="origin-header-join-button"
        onMouseEnter={() => (joined ? setButtonText("Leave") : "")}
        onMouseLeave={() => (joined ? setButtonText("Joined") : "")}
        onClick={() =>
          props.loggedIn ? modifySubscription() : setShowModal(true)
        }
      >
        {buttonText}
      </button>
      {showModal ? (
        <UserAccountModal
          type="signup"
          disableButtonMode="true"
          exit={() => setShowModal((prevState) => !prevState)}
        ></UserAccountModal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default SubscribeButton;
