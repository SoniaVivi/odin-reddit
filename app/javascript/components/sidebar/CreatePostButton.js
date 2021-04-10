import React, { useState } from "react";
import PropTypes from "prop-types";

const CreatePostButton = (props) => {
  const [hasActiveModal, setHasActiveModal] = useState(false);

  return (
    <React.Fragment>
      <button
        class="sidebar"
        onClick={() => {
          if (props.loggedIn) {
            props.onClick();
          } else {
            setHasActiveModal(true);
          }
        }}
      >
        Create Post
      </button>
      {hasActiveModal ? (
        <UserAccountModal
          type="signup"
          disableButtonMode="true"
          exit={() => setHasActiveModal(false)}
        ></UserAccountModal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default CreatePostButton;
